import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';  // <<<< import it here




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  fullname: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  closeResult = '';

  constructor(public dialog: MatDialog) {}

  
  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { 
        fullname:this.fullname,
        address1:this.address1,
        address2:this.address2,
        city:this.city,
        state: this.state, 
       }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
