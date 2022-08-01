import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionDialogComponent } from '../transaction-dialog/transaction-dialog.component';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  public transactions: any=[];
  public displayedColumns: string[]=["id", "beneficiaryname", "date","description","directions","amount","currency","transactionKind","catcode","categorize"];
  public dataSource =new MatTableDataSource();
  constructor(
    protected service:TransactionsService,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }
  public getTransactions(kind:string, page:string)
  {
    this.service.getTransactions(kind,page).subscribe((res)=>{
    this.transactions=res;
    this.dataSource.data=this.transactions.items;
    console.log(kind);
    });
  }
  public categorizeTransaction(id:string,element:any)
  {
    const dialogRef = this.dialog.open(TransactionDialogComponent, {
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(result => {
    element.catcode=result;  
    this.service.categorizeTransaction(id,result).subscribe((res)=>{
      console.log(res);
      });
    });  
  }
  
}  