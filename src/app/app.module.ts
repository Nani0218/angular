import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDriveCommponentComponent } from './template-drive-commponent/template-drive-commponent.component';
import { HttpClient, provideHttpClient,withInterceptors,  withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { MaskDirective } from './mask.directive';
import { AdharcardComponent } from './adharcard/adharcard.component';
import { VoteridcardComponent } from './voteridcard/voteridcard.component';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { AddingrestaurantComponent } from './restaurant/addingrestaurant.component';
import { RatingComponent } from './rating/rating.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LoansearchComponent } from './loansearch/loansearch.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDriveCommponentComponent,
    ForgetpasswordComponent,
    MaskDirective,
    AdharcardComponent,
    VoteridcardComponent,
    AddressComponent,
    UserComponent,
    AddingrestaurantComponent,
    RatingComponent,
    CreateaccountComponent,
    LoansearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    HttpClient,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
