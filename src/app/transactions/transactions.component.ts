import { Component,  OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(
    protected service:TransactionsService
  ) { }

  ngOnInit(): void {
    console.log("Uspehj");
    this.service.getTransactions("pmt").subscribe((res)=>{console.log("transactions",res);});
  }

}