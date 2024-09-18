import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { TemplateDriveCommponentComponent } from './template-drive-commponent/template-drive-commponent.component';
import { AdharcardComponent } from './adharcard/adharcard.component';
import { restaurant } from '../model/Restaurant';
import { AddingrestaurantComponent } from './restaurant/addingrestaurant.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LoansearchComponent } from './loansearch/loansearch.component';

const routes: Routes = [{
  path:'register',
  component:TemplateDriveCommponentComponent

}
,{
  path:'forgetpassword',
  component:ForgetpasswordComponent

}
,{
  path:'adharcard',
  component:AdharcardComponent
  },
  {
    path:'addRestaurant',
    component:AddingrestaurantComponent
  },
  {
    path:'createaccount',
    component:CreateaccountComponent
  },
  {
    path:'loansearch',
    component:LoansearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
