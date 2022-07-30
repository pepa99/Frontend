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
  public displayedColumns: string[]=["id", "beneficiaryname", "date","description","directions","amount","currency","transactionKind","mcc","catcode","categorize"];
  public dataSource =new MatTableDataSource();
  constructor(
    protected service:TransactionsService,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    
  }
  public getTransactions(kind:string)
  {
    this.service.getTransactions(kind).subscribe((res)=>{
    this.transactions=res;
    this.dataSource.data=this.transactions.items;
    console.log(kind);
    });
  }
  public categorizeTransaction(id:string)
  {
    const dialogRef = this.dialog.open(TransactionDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {

    this.service.categorizeTransaction(id,result).subscribe((res)=>{
      console.log(res);
      });
    });  
  }
  
}  