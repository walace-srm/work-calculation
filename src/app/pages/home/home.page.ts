import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  routerInss() {
    this.router.navigate(["/calc-inss"]);
  }

  routerIrrf() {
    this.router.navigate(["/calc-irrf"]);
  }

  routerDissidio() {
    this.router.navigate(["/calc-dissidio"]);
  }

  routerDecimoTerceiro() {
    this.router.navigate(["/calc-decimo-terceiro"]);
  }

  routerPericulosidade() {
    this.router.navigate(["/calc-periculosidade"]);
  }

  routerDicas() {
    this.router.navigate(["/dicas"]);
  }
}
