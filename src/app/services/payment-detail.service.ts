import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PaymentDetail } from '../models/paymentDetail';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http : HttpClient) { }

  apiurl : string = "https://localhost:7210/api/PaymentDetail";
  list : PaymentDetail[] = [];
  newPayment : PaymentDetail = new PaymentDetail();

  getAllPayments(){
    this.http.get<PaymentDetail[]>(this.apiurl).subscribe({
      next : res => {
        this.list = res
      },
      error: err => {console.log(err)}
    })
  }

  addPayment(){
    return this.http.post(this.apiurl,this.newPayment)
  }

  deletePayment(id : number){
    return this.http.delete(this.apiurl+"/"+id)
  }

}
