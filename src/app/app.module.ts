import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatGridListModule, MatGridTile, MatIconModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips'
import { HttpClientModule } from '@angular/common/http';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UserProfileEditComponent } from './user/user-profile-edit/user-profile-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    UserComponent,
    UserRegistrationComponent,
    UserprofileComponent,
    UserProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatChipsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,

    
  ],
  entryComponents:[
  UserRegistrationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
