import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PageComponent } from './pages/page.component';
import { RegisterComponent } from './login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    DashboardComponent,
    ProgressComponent,
    PageComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
