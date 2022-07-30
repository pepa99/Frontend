import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.scss']
})
export class TransactionDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TransactionDialogComponent>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  public categorize(code:string)
  {
    this.dialogRef.close(code);
  } 
}
