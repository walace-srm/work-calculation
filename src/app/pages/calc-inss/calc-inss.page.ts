import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-calc-inss',
  templateUrl: './calc-inss.page.html',
  styleUrls: ['./calc-inss.page.scss'],
})
export class CalcInssPage  {

  public inssForm: FormGroup;
  public grossSalary: number;
  public inssValue: number;
  public calculatedInss: number;
  public aliquota: any;

  constructor(
      private formBuilder: FormBuilder,
      public toastController: ToastController
  ) {
    this.inssForm = this.formBuilder.group({
      grossSalary: ['', Validators.required],
      inssValue: ['']
    });
  }

  calcInss() {
    if (this.grossSalary < 1100) {
      this.lowerSalaryToast();
      this.calculatedInss = undefined;
    }
    if (this.grossSalary === 1100) {
      this.inssValue = 82.50;
      this.calculatedInss = 82.50;
      this.aliquota = 7.5;
    } else if ((this.grossSalary > 1100) && (this.grossSalary < 2203.49)) {
      this.inssValue = 99.31;
      this.calculatedInss = (this.grossSalary * 9 / 100) - 16.50;
      this.aliquota = 9;
    } else if ((this.grossSalary > 2203.48) && (this.grossSalary < 3305.23)) {
      this.inssValue = 132.21;
      this.calculatedInss = (this.grossSalary * 12 / 100) - 82.60;
      this.aliquota = 12;
    } else if ((this.grossSalary > 3305.22) && (this.grossSalary < 6433.58)) {
      this.inssValue = 437.96;
      this.calculatedInss = (this.grossSalary * 14 / 100) - 148.70;
      this.aliquota = 14;
    } else if ((this.grossSalary > 6433.57)) {
      this.inssValue = 437.96;
      this.calculatedInss = (6433.57 * 14 / 100) - 148.70;
      this.aliquota = 'Teto';
    }
    this.inssForm.patchValue({
      inssValue: this.calculatedInss?.toFixed(2).toString().replace('.', ',')
    });
  }

  async lowerSalaryToast() {
    const toast = await this.toastController.create({
      message: 'Valor inferior ao salário mínimo (R$1.100)',
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
    this.inssForm.reset();
    this.calculatedInss = undefined;
  }

  onSubmit({ value, valid}: {value: any; valid: boolean }) {
    if (!valid) {
      return this.reportSalaryToast();
    }
    this.grossSalary = value.grossSalary;
    this.calcInss();
  }

}
