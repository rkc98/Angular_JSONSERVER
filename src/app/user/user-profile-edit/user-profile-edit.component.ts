import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
export interface country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  constructor(private userservice:UserdataService,private router:Router,private route:ActivatedRoute) { }
  userdetails:object;
  userdata=[];
  countries: country[] = [
    {value: 'India', viewValue: 'India'},
    {value: 'England', viewValue: 'England'},
    {value: 'China', viewValue: 'China'}
  ];
  states: country[] = [
    {value: 'Maharashtra', viewValue: 'Maharashtra'},
    {value: 'Goa', viewValue: 'Goa'},
    {value: 'Punjab', viewValue: 'Punjab'}
  ];
 
  ngOnInit() {
    const id=this.route.snapshot.params['id'];
    this.userservice.getUser(id).subscribe(
      response=>{
       //this.userdetails=response
      console.log(response);
this.userdetails=response
console.log(this.userdetails);
this.userdata.push(this.userdetails)
console.log(this.userdata);


      }
    );
  }
  
  form: FormGroup = new FormGroup({
   
    FirstName: new FormControl('', [Validators.required,Validators.pattern("^[A-Za-z]+$"),Validators.maxLength(20)]),
    LastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email,Validators.required]),
    mobile: new FormControl('', [Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10),]),
    age:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    usertags: new FormControl([], Validators.required)
  });
 
  onUpdate(){
    const id=this.route.snapshot.params['id'];
   //this.postservice.Updateuser(this.userdata['id'])
   this.userservice.Updateuser(id,this.form.value.FirstName,this.form.value.LastName,this.form.value.image.name,this.form.value.email,this.form.value.mobile,this.form.value.age,
    this.form.value.state,this.form.value.country,this.form.value.address,this.form.value.usertags)
 
  }
}
