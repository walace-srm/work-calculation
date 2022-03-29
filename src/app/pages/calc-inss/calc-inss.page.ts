import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { PDFGenerator } from "@ionic-native/pdf-generator/ngx";

@Component({
  selector: "app-calc-inss",
  templateUrl: "./calc-inss.page.html",
  styleUrls: ["./calc-inss.page.scss"],
})
export class CalcInssPage {
  public inssForm: FormGroup;
  public grossSalary: number;
  public grossSalaryFormatted: string;
  public inssValue: number;
  public calculatedInss: number;
  public calculatedInssPdf: any;
  public aliquota: any;

  constructor(
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private pdfGenerator: PDFGenerator
  ) {
    this.inssForm = this.formBuilder.group({
      grossSalary: ["", Validators.required],
      inssValue: [""],
    });
  }

  calcInss() {
    if (this.grossSalary < 1212) {
      this.lowerSalaryToast();
      this.calculatedInss = undefined;
    }
    if (this.grossSalary === 1212) {
      this.inssValue = 90.9;
      this.calculatedInss = 90.9;
      this.aliquota = 7.5;
    } else if (this.grossSalary > 1212 && this.grossSalary < 2427.35) {
      this.inssValue = 109.38;
      this.calculatedInss = (this.grossSalary * 9) / 100 - 18.18;
      this.aliquota = 9;
    } else if (this.grossSalary > 2427.36 && this.grossSalary < 3641.03) {
      this.inssValue = 145.64;
      this.calculatedInss = (this.grossSalary * 12) / 100 - 91;
      this.aliquota = 12;
    } else if (this.grossSalary > 3641.04 && this.grossSalary < 7087.22) {
      this.inssValue = 482.47;
      this.calculatedInss = (this.grossSalary * 14) / 100 - 163.82;
      this.aliquota = 14;
    } else if (this.grossSalary > 7087.22) {
      this.inssValue = 482.47;
      this.calculatedInss = (7087.22 * 14) / 100 - 163.82;
      this.aliquota = "Teto";
    }
    this.inssForm.patchValue({
      inssValue: this.calculatedInss?.toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    });
    this.calculatedInssPdf = this.calculatedInss?.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    this.grossSalaryFormatted = this.grossSalary.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  }

  async lowerSalaryToast() {
    const toast = await this.toastController.create({
      message: "Valor inferior ao salário mínimo (R$1.212)",
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
    this.inssForm.reset();
    this.calculatedInss = undefined;
    this.grossSalary = undefined;
  }

  showClearButton(e) {
    this.grossSalary = e;
    if (!e) {
      this.inssForm.patchValue({
        inssValue: (this.inssForm.value.inssValue = undefined),
      });
      this.calculatedInss = undefined;
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
    this.inssForm.markAsPristine();
  }
}
