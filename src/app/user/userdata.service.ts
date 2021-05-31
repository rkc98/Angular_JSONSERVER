import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(public http: HttpClient, private router: Router) { }
  addUsers(FirstName: string, LastName: string,image: File, email: string, mobile: string, age: string, state: string, country: string, address: string,tags:string[]) {

    const usserdata = {
      "FirstName": FirstName,
      "LastName": LastName,
      "email":email,
      "image": image,
      "mobile": mobile,
      "age": age,
      "state": state,
      "country": country,
      "address": address,
      "tags":tags
    }
    console.log(usserdata);

    this.http
      .post(
        "http://localhost:3000/user",
        usserdata
      )
      .subscribe((responsedata) => {
        console.log("successfull", responsedata);
        const id=responsedata['id'];
        console.log(id);
        
        this.router.navigate(['/userprofile/'+id])

      });
  }
  getUser(id) {
    return this.http
      .get("http://localhost:3000/user/"+id);

      
  }
  Updateuser(id:string,FirstName: string, LastName: string,image: File, email: string, mobile: string, age: string, state: string, country: string, address: string,tags:string[]) {

    const usserdata = {
      "FirstName": FirstName,
      "LastName": LastName,
      "email":email,
      "image": image,
      "mobile": mobile,
      "age": age,
      "state": state,
      "country": country,
      "address": address,
      "tags":tags
    }
    console.log(usserdata);
    console.log(id);
    
    this.http
      .put(
        "http://localhost:3000/user/"+id,
        usserdata
      )
      .subscribe((responsedata) => {
        console.log("successfull", responsedata);
        const id=responsedata['id'];
        console.log(id);
        
        this.router.navigate(['/userprofile/'+id])

      });
  }

}