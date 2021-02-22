import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PDFGenerator} from '@ionic-native/pdf-generator/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-calc-dissidio',
  templateUrl: './calc-dissidio.page.html',
  styleUrls: ['./calc-dissidio.page.scss'],
})
export class CalcDissidioPage  {
  public dissidioForm: FormGroup;
  public grossSalary: number;
  public grossSalaryFormatted: string;
  public salaryIncrease: number;
  public calculatedDissidio: number;
  public calculatedDissidioPdf: any;
  public newSalary: number;
  public newSalaryPdf: any;

  constructor(
      private formBuilder: FormBuilder,
      public pdfGenerator: PDFGenerator,
      public toastController: ToastController,
      ) {
    this.dissidioForm = this.formBuilder.group({
      grossSalary: ['', Validators.required],
      salaryIncrease: ['', Validators.required]
    });
  }

  calcDissidio() {
    this.grossSalary = this.dissidioForm.value.grossSalary;
    this.salaryIncrease = this.dissidioForm.value.salaryIncrease;
    this.calculatedDissidio = (this.grossSalary * (this.salaryIncrease / 100));
    this.newSalary = (this.grossSalary + this.calculatedDissidio);
    this.calculatedDissidioPdf = this.calculatedDissidio;
    this.newSalaryPdf = this.newSalary;
    this.grossSalaryFormatted = this.grossSalary
        .toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  showClearButton(e) {
    this.grossSalary = e;
    if (!e) {
      this.dissidioForm.patchValue({
        salaryIncrease: this.dissidioForm.value.salaryIncrease = undefined
      });
      this.calculatedDissidio = undefined;
    }
  }

  async reportSalaryToast() {
    const toast = await this.toastController.create({
      message: 'Insira o valor do salário!',
      duration: 3000,
      color: 'medium'
    });
    toast.present();
  }

  async dissidioValueToast() {
    const toast = await this.toastController.create({
      message: 'Informe o valor do dissídio',
      duration: 3000,
      color: 'medium'
    });
    toast.present();
  }


  resetForm() {
    this.dissidioForm.reset();
    this.calculatedDissidio = undefined;
    this.grossSalary = undefined;
  }

  generatorPdf() {
    const hidden = document.getElementById('remove');
    hidden.removeAttribute('hidden');
    hidden.setAttribute('hidden', '');
    const a: any = document.getElementById('print');
    this.pdfGenerator.fromData(a.innerHTML, { type: 'share' });
  }

  onSubmit({ value, valid}: {value: any; valid: boolean }) {
    if (!value.grossSalary) {
      return this.reportSalaryToast();
    }

    if (!value.salaryIncrease) {
      this.dissidioValueToast();
    }
    this.calcDissidio();
    this.calculatedDissidioPdf = this.calculatedDissidio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    this.newSalaryPdf = this.newSalary.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}
