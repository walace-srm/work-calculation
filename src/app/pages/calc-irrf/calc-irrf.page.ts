import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastController} from '@ionic/angular';

import { fiscalRules } from '../../../consts/fiscal-roles';

@Component({
  selector: 'app-calc-irrf',
  templateUrl: './calc-irrf.page.html',
  styleUrls: ['./calc-irrf.page.scss'],
})
export class CalcIrrfPage {
  public irrfForm: FormGroup;
  public grossSalary: number;
  public inssValue: number;
  public calculatedInss: number;
  public calculatedIrrf: number;

  public baseCalculation: number;
  public valueDependent = 189.59;

  constructor(
      private formBuilder: FormBuilder,
      public toastController: ToastController
  ) {
    this.irrfForm = this.formBuilder.group({
      grossSalary: ['', Validators.required],
      inssValue: [''],
      irrfValue: [''],
      dependentValue: ['']
    });
  }

  calcInss() {
    if (this.grossSalary === 1100) {
      /**
       * Será implementado futuramente
       **/
      // this.inssValue = fiscalRules.inssValue;
      this.inssValue = 82.50;
    } else if ((this.grossSalary > 1100) && (this.grossSalary < 2203.49)) {
      this.inssValue = 99.31;
      this.calculatedInss = (this.grossSalary * 9 / 100) - 16.50;
    } else if ((this.grossSalary > 2203.48) && (this.grossSalary < 3305.23)) {
      this.inssValue = 132.21;
      this.calculatedInss = (this.grossSalary * 12 / 100) - 82.60;
    } else if ((this.grossSalary > 3305.22) && (this.grossSalary < 6433.58)) {
      this.inssValue = 437.96;
      this.calculatedInss = (this.grossSalary * 14 / 100) - 148.70;
    } else if ((this.grossSalary > 6433.57)) {
      this.inssValue = 437.96;
      this.calculatedInss = (6433.57 * 14 / 100) - 148.70;
    }
    this.irrfForm.patchValue({
      inssValue: this.calculatedInss,
    });
  }

  calcIrrf() {
    const dependentCalculation = this.irrfForm.value.dependentValue * this.valueDependent;
    const baseSalary = this.grossSalary - this.calculatedInss;
    if ((baseSalary < 1903.98) || (this.grossSalary < 1903.98)) {
      this.calculatedIrrf = undefined;
      this.taxFreeToast();
    }
    else if ((baseSalary > 1903.98) && (baseSalary < 2826.66)) {
      this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * 7.5 / 100 - 142.80;
    }
    else if ((baseSalary > 2826.65) && (baseSalary < 3751.05)) {
      this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * 15 / 100 - 354.80;
    }
    else if ((baseSalary > 3751.05) && (baseSalary < 4664.69)) {
      this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * (22.5 / 100) - 636.13;
    }
    else if ((baseSalary > 4664.68)) {
      this.calculatedIrrf = ((this.grossSalary - this.calculatedInss - dependentCalculation) * 27.5 / 100) - 869.36;
    }
    this.irrfForm.patchValue({
      irrfValue: this.calculatedIrrf?.toFixed(2).toString().replace('.', ','),
      dependentValue: this.irrfForm.value.dependentValue
    });
    this.baseCalculation = this.grossSalary - this.calculatedInss;
  }

  async taxFreeToast() {
    const toast = await this.toastController.create({
      message: 'Isento de imposto de renda!',
      duration: 3000,
      color: 'medium'
    });
    toast.present();
  }

  async reportSalaryToast() {
    const toast = await this.toastController.create({
      message: 'Insira o valor do salário!',
      duration: 3000,
      color: 'medium'
    });
    toast.present();
  }

  resetForm() {
    this.irrfForm.reset();
    this.baseCalculation = undefined;
    this.calculatedIrrf = undefined;
    this.calculatedInss = undefined;
    this.grossSalary = undefined;
  }

  showClearButton(e) {
    this.grossSalary = e;
    if (!e) {
      this.irrfForm.patchValue({
        irrfValue: this.irrfForm.value.irrfValue = undefined
      });
      this.calculatedIrrf = undefined;
      this.baseCalculation = undefined;
    }
  }

  print() {
    window.print();
  }

  onSubmit({value, valid}: {value: any; valid: boolean}) {
    if (!valid) {
      return this.reportSalaryToast();
    }
    this.grossSalary = value.grossSalary;
    this.calcInss();
    this.calcIrrf();
  }

}
