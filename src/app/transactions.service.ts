import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    protected http:HttpClient
  ) { }
  public getTransactions(kind:string, page:string)
  {
     return this.http.get("https://localhost:7087/transactions?kind_str="+kind+"&starts=1/1/1900&ends=1/1/2023&page="+page+"&pagesize=10&sortby=date&sortorder=Desc");

  }
  public categorizeTransaction(id:string,code:string)
  {
    //code="100";
    console.log(code);
    const body=JSON.stringify(code);

    return this.http.post<any>("https://localhost:7087/transactions/"+id+"/categorize",body,
    {
      headers : new HttpHeaders(
        {
          "Content-Type": "application/json"
        }
        )
    }
    );
  }
}
