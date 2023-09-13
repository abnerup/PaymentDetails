import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/models/paymentDetail';
import { PaymentDetailService } from 'src/app/services/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent {

  constructor(public service : PaymentDetailService, private tost : ToastrService ) {}

  onSubmit(form:NgForm){
    if(!form.valid)
    {
      this.tost.error('Erro ao enviar formulario','Payment Detail Register')
      return;
    }
    this.service.addPayment().subscribe({
      next : res => {this.service.getAllPayments(); this.service.newPayment = new PaymentDetail(); this.tost.success('Inserted successfuly','Payment Detail Register')},
      error : err => {console.log(err)}
    })
  }
}
