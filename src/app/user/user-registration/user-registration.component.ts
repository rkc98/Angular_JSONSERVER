import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { UserdataService } from '../userdata.service';


export interface country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserRegistrationComponent>,private userservice:UserdataService) { }
  
  imagePreview="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4JC7vqwt8SkttnvMpdVk4npX-pX3SIfFkQ&usqp=CAU";
  ngOnInit() {
    
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
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

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags = [
   
  ];
  usertags=[]

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
      this.usertags.push(value)
    }

    
    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

 


  onImageAdded(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    
    
    this.form.get("image").updateValueAndValidity();
    const img = new Image();
       img.src = window.URL.createObjectURL( file );;
    const reader = new FileReader();
    reader.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      window.URL.revokeObjectURL( img.src );
      console.log(width,height);
      

      if( width !== 310 && height !== 325 ) {
        console.log("inside if");
        return 
        
      }
      else{
        console.log("inside else");
      this.imagePreview = reader.result as string;
      this.form.patchValue({
        image: file,
      });
      }
      
    };
    reader.readAsDataURL(file);
  }
  onSubmit(){
    
    this.userservice.addUsers(this.form.value.FirstName,this.form.value.LastName,this.form.value.image.name,this.form.value.email,this.form.value.mobile,this.form.value.age,
      this.form.value.state,this.form.value.country,this.form.value.address,this.usertags)
      this.dialogRef.close();
  }
  onClose() {
    this.form.reset();
    this.dialogRef.close();
  }
  

}
