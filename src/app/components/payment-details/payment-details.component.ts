import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from 'src/app/services/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {


  constructor(public service : PaymentDetailService, private toast:ToastrService ) {

  }

  ngOnInit(): void {
    this.service.getAllPayments();
  }

  onDelete(id : number){
    this.service.deletePayment(id).subscribe({
      next: res => {
        this.service.getAllPayments();
        this.toast.success('Operação realizada com sucesso.');
      }
    })
  }

}
