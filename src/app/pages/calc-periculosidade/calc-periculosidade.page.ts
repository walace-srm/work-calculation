import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PDFGenerator } from "@ionic-native/pdf-generator/ngx";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-calc-periculosidade",
  templateUrl: "./calc-periculosidade.page.html",
  styleUrls: ["./calc-periculosidade.page.scss"],
})
export class CalcPericulosidadePage implements OnInit {
  public form: FormGroup;
  public grossSalary: number;
  public calculatedDangerousness: number;
  public grossSalaryFormatted: string;
  public calculatedDangerousnessPdf: string;
  public total: string;

  constructor(
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private pdfGenerator: PDFGenerator
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      grossSalary: ["", Validators.required],
      dangerousnessValue: [""],
    });
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
    this.form.reset();
    this.calculatedDangerousness = undefined;
    this.grossSalary = undefined;
  }

  showClearButton(e) {
    this.grossSalary = e;
    if (!e) {
      this.form.patchValue({
        dangerousnessValue: (this.form.value.inssValue = undefined),
      });
      this.calculatedDangerousness = undefined;
    }
  }

  calcDangerousness() {
    this.calculatedDangerousness = (this.form.value.grossSalary * 30) / 100;
    this.form.patchValue({
      dangerousnessValue: this.calculatedDangerousness?.toLocaleString(
        "pt-BR",
        {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        }
      ),
    });
    this.grossSalaryFormatted = this.grossSalary.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });

    this.calculatedDangerousnessPdf =
      this.calculatedDangerousness?.toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      });

    this.total = (
      this.grossSalary + this.calculatedDangerousness
    )?.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
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
    this.calcDangerousness();
    this.form.markAsPristine();
  }
}
