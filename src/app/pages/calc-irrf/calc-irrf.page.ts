import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";

import { fiscalRules } from "../../../consts/fiscal-roles";
import { PDFGenerator } from "@ionic-native/pdf-generator/ngx";

@Component({
  selector: "app-calc-irrf",
  templateUrl: "./calc-irrf.page.html",
  styleUrls: ["./calc-irrf.page.scss"],
})
export class CalcIrrfPage {
  public irrfForm: FormGroup;
  public grossSalary: number;
  public grossSalaryFormatted: string;
  public inssValue: number;
  public calculatedInss: number;
  public calculatedIrrf: number;
  public calculatedIrrfPdf: any;

  public baseCalculation: number;
  public baseCalculationPdf: any;
  public valueDependent = 189.59;
  public showBaseCalculation: string;
  public dependentQuantity: number;

  constructor(
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private pdfGenerator: PDFGenerator
  ) {
    this.irrfForm = this.formBuilder.group({
      grossSalary: ["", Validators.required],
      inssValue: [""],
      irrfValue: [""],
      dependentValue: [0],
    });
  }

  calcInss() {
    if (this.grossSalary === 1212) {
      /**
       * Será implementado futuramente
       **/
      // this.inssValue = fiscalRules.inssValue;
      this.inssValue = 90.9;
    } else if (this.grossSalary > 1212 && this.grossSalary < 2427.35) {
      this.inssValue = 109.38;
      this.calculatedInss = (this.grossSalary * 9) / 100 - 18.18;
    } else if (this.grossSalary > 2427.36 && this.grossSalary < 3641.03) {
      this.inssValue = 145.64;
      this.calculatedInss = (this.grossSalary * 12) / 100 - 91;
    } else if (this.grossSalary > 3641.04 && this.grossSalary < 7087.22) {
      this.inssValue = 482.47;
      this.calculatedInss = (this.grossSalary * 14) / 100 - 163.82;
    } else if (this.grossSalary > 7087.22) {
      this.inssValue = 482.47;
      this.calculatedInss = (7087.22 * 14) / 100 - 163.82;
    }
    this.irrfForm.patchValue({
      inssValue: this.calculatedInss,
    });
  }

  calcIrrf() {
    const dependentCalculation =
      this.irrfForm.value.dependentValue * this.valueDependent;
    const baseSalary = this.grossSalary - this.calculatedInss;
    if (baseSalary < 1903.98 || this.grossSalary < 1903.98) {
      this.calculatedIrrf = undefined;
      this.taxFreeToast();
    } else if (baseSalary > 1903.98 && baseSalary < 2826.66) {
      this.calculatedIrrf =
        ((this.grossSalary - this.calculatedInss - dependentCalculation) *
          7.5) /
          100 -
        142.8;
    } else if (baseSalary > 2826.65 && baseSalary < 3751.05) {
      this.calculatedIrrf =
        ((this.grossSalary - this.calculatedInss - dependentCalculation) * 15) /
          100 -
        354.8;
    } else if (baseSalary > 3751.05 && baseSalary < 4664.69) {
      this.calculatedIrrf =
        (this.grossSalary - this.calculatedInss - dependentCalculation) *
          (22.5 / 100) -
        636.13;
    } else if (baseSalary > 4664.68) {
      this.calculatedIrrf =
        ((this.grossSalary - this.calculatedInss - dependentCalculation) *
          27.5) /
          100 -
        869.36;
    }
    this.irrfForm.patchValue({
      irrfValue: this.calculatedIrrf?.toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
      }),
      dependentValue: this.irrfForm.value.dependentValue,
    });
    this.baseCalculation = this.grossSalary - this.calculatedInss;
    this.calculatedIrrfPdf = this.calculatedIrrf?.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    this.baseCalculationPdf = this.baseCalculation.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    this.showBaseCalculation = this.baseCalculation.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    this.grossSalaryFormatted = this.grossSalary.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    this.dependentQuantity = this.irrfForm.value.dependentValue;
  }

  async taxFreeToast() {
    const toast = await this.toastController.create({
      message: "Isento de imposto de renda!",
      duration: 3000,
      color: "medium",
    });
    toast.present();
  }

  async reportSalaryToast() {
    const toast = await this.toastController.create({
      message: "Insira o valor do salário!",
      duration: 3000,
      color: "medium",
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
        irrfValue: (this.irrfForm.value.irrfValue = undefined),
        dependentValue: (this.irrfForm.value.dependentValue = undefined),
      });
      this.calculatedIrrf = undefined;
      this.baseCalculation = undefined;
    }
  }

  generatorPdf() {
    const hidden = document.getElementById("remove");
    hidden.removeAttribute("hidden");
    hidden.setAttribute("hidden", "");
    const a: any = document.getElementById("print");
    this.pdfGenerator.fromData(a.innerHTML, { type: "share" });
  }

  onSubmit({ value, valid }: { value: any; valid: boolean }) {
    if (!valid) {
      return this.reportSalaryToast();
    }
    this.grossSalary = value.grossSalary;
    this.calcInss();
    this.calcIrrf();
  }
}
