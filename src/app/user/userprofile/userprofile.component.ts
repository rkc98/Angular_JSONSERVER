import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userdata=[]
  userdetails:object;
  constructor(private postservice:UserdataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    const id=this.route.snapshot.params['id'];
    this.postservice.getUser(id).subscribe(
      response=>{
       //this.userdetails=response
      console.log(response);
this.userdetails=response
console.log(this.userdetails);
this.userdata.push(this.userdetails)
      }
    );
  }
onedit(){
  const id=this.route.snapshot.params['id'];
this.router.navigate(['/useredit/'+id]);
}
}
