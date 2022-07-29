import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    protected http:HttpClient
  ) { }
  public getTransactions(kind:string)
  {
     return this.http.get("https://localhost:7087/transactions?kind_str=pmt&starts=8/24/2021&ends=8/26/2021&page=1&pagesize=10&sortby=id&sortorder=Asc");

  }
}
