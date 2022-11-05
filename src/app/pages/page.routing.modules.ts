import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


const pageRoutes : Routes = [
    {
        path: '',
        component: PageComponent,
        children:[
          {path: 'dashboard', component: DashboardComponent},
          {path: 'progress', component: ProgressComponent},
          {path: 'graficas1', component: Graficas1Component},
          {path: '', redirectTo: '/dashboard', pathMatch: 'full'}  
      ]  
    }
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}