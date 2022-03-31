import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatStepper } from "@angular/material/stepper";

@Component({
  selector: "app-stepper-paginator",
  templateUrl: "./stepper-paginator.component.html",
  styleUrls: ["./stepper-paginator.component.css"]
})
export class StepperPaginatorComponent implements OnInit, AfterViewInit {
  MAX_STEP = 4;
  totalSteps = 8;
  page = 0;
  step = 0;
  minStepAllowed = 0;
  maxStepAllowed = this.MAX_STEP - 1;
  totalPages = Math.ceil(this.totalSteps / this.MAX_STEP);
  @ViewChild("stepper") private myStepper: MatStepper;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  paginatorBack() {}

  paginatorNext() {}

  goBack() {}

  goForward() {}

  stepSelectionChange() {}
}
