import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileEditComponent } from './user/user-profile-edit/user-profile-edit.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'userprofile/:id',component:UserprofileComponent},
  {path:'useredit/:id',component:UserProfileEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
