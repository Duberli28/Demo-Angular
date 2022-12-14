import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NopagefoundComponent}  


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
