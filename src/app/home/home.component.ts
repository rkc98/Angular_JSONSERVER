import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserRegistrationComponent } from '../user/user-registration/user-registration.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  onCreate() {
    console.log("called on created");
    
    //this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(UserRegistrationComponent,dialogConfig);
  }
}
