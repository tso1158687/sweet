import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  step = 1;
  // 運送、付款、發票
  title = '運送';
  constructor() { }

  ngOnInit() {
  }
  nextStep() {
    this.step += 1;
    switch (this.step) {
      case 1:
        this.title = '運送';
        break;
      case 2:
        this.title = '付款';
        break;
      case 3:
        this.title = '發票';
        break;
    }
  }
  finish() {

  }
  changeStep(step) {
    this.step = step;
  }

}
