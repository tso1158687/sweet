import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  step = 1;
  constructor() { }

  ngOnInit() {
  }
  nextStep() {
    this.step += 1;
  }

}
