import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PDFGenerator} from '@ionic-native/pdf-generator/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-calc-decimo-terceiro',
  templateUrl: './calc-decimo-terceiro.page.html',
  styleUrls: ['./calc-decimo-terceiro.page.scss'],
})
export class CalcDecimoTerceiroPage {
  private decimoTerceiroForm: FormGroup;

  public grossSalary: number;
  public inssValue: number;
  public calculatedInss: number;
  public calculatedIrrf: any;
  public calculatedIrrfPdf: any;

  public baseCalculation: number;
  public baseCalculationPdf: any;
  public valueDependent = 189.59;
  public showBaseCalculation: string;
  public monthsWorked: number;
  public parcelPrimary: number;
  public parcelPrimaryFormatted: string;
  public parcelSecondary: number;
  public parcelSecondaryFormatted: string;
  public total: number;
  public totalFormatted: string;
  public proportionalSalary: number;
  public proportionalSalaryFormatted: string;
  public dependentQuantity: number;
  public realGrossSalary: number;
  public realGrossSalaryFormatted: string;

  constructor(
      private formBuilder: FormBuilder,
      private pdfGenerator: PDFGenerator,
      private toastController: ToastController) {
    this.decimoTerceiroForm = this.formBuilder.group({
      grossSalary: ['', Validators.required],
      dependentValue: [0],
      monthsWorked: ['', Validators.required],
    });
  }

  calcInss() {
    this.grossSalary = this.grossSalary / 12 * this.decimoTerceiroForm.value.monthsWorked;
    if (this.grossSalary < 1100) {
      this.inssValue = 82.50;
      this.calculatedInss = (this.grossSalary * 7.5 / 100);
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
  }

  calcIrrf() {
    const dependentCalculation = this.decimoTerceiroForm.value.dependentValue * this.valueDependent;
    const baseSalary = this.grossSalary - this.calculatedInss;
    if ((baseSalary < 2075)) {
      this.calculatedIrrf = 0;
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
    this.baseCalculation = this.grossSalary - this.calculatedInss;
    this.calculatedIrrfPdf = this.calculatedIrrf?.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    this.baseCalculationPdf = this.baseCalculation.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    this.showBaseCalculation = this.baseCalculation.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });

  }

  showClearButton(e) {
    this.grossSalary = e;
    if (!e) {
      this.decimoTerceiroForm.patchValue({
        monthsWorked: this.decimoTerceiroForm.value.monthsWorked = undefined,
      });
      this.parcelPrimary = undefined;
      this.parcelSecondary = undefined;
      this.total = undefined;
    }
  }

  resetForm() {
    this.decimoTerceiroForm.reset();
    this.baseCalculation = undefined;
    this.calculatedIrrf = undefined;
    this.calculatedInss = undefined;
    this.grossSalary = undefined;
  }

  async grossSalaryToast() {
    const toast = await this.toastController.create({
      message: 'Informe o salário bruto!',
      duration: 3000,
      color: 'medium'
    });
    toast.present();
  }

  async monthsWorkedToast() {
    const toast = await this.toastController.create({
      message: 'Informe a quantidade de meses trabalhados!',
      duration: 3000,
      color: 'medium'
    });
    toast.present();
  }

  generatorPdf() {
    const hidden = document.getElementById('remove');
    hidden.removeAttribute('hidden');
    hidden.setAttribute('hidden', '');
    const a: any = document.getElementById('print');
    this.pdfGenerator.fromData(a.innerHTML, { type: 'share' });
  }

  onSubmit({value, valid}: {value: any; valid: boolean}) {
    if (!value.grossSalary) {
      return this.grossSalaryToast();
    }
    if (!value.monthsWorked) {
      return this.monthsWorkedToast();
    }
    this.grossSalary = value.grossSalary;
    this.calcInss();
    this.calcIrrf();
    this.monthsWorked = value.monthsWorked;
    this.parcelPrimary = (this.grossSalary) / 2;
    this.parcelPrimaryFormatted = this.parcelPrimary
        .toLocaleString('pt-BR', {maximumFractionDigits: 2, minimumFractionDigits: 2});
    this.parcelSecondary = this.parcelPrimary - this.calculatedInss - this.calculatedIrrf;
    this.parcelSecondaryFormatted = this.parcelSecondary
        .toLocaleString('pt-BR', {maximumFractionDigits: 2, minimumFractionDigits: 2});
    this.total = (this.parcelPrimary + this.parcelSecondary);
    this.totalFormatted = this.total.toLocaleString('pt-BR', {maximumFractionDigits: 2, minimumFractionDigits: 2});
    this.realGrossSalary = value.grossSalary;
    this.realGrossSalaryFormatted = this.realGrossSalary
        .toLocaleString('pt-BR', {maximumFractionDigits: 2, minimumFractionDigits: 2});
    this.dependentQuantity = value.dependentValue;
    this.proportionalSalary = value.grossSalary / 12 * value.monthsWorked;
    this.proportionalSalaryFormatted = this.proportionalSalary
        .toLocaleString('pt-BR', {maximumFractionDigits: 2, minimumFractionDigits: 2});
  }


}
