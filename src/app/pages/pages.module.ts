import { NgModule } from '@angular/core';
//import { PageRoutingModule } from './page.routing.modules';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { PageComponent } from './page.component';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';


@NgModule({
    declarations:[
        PageComponent,
        Graficas1Component,
        DashboardComponent,
        ProgressComponent
    ],
    exports:[
        
        Graficas1Component,
        DashboardComponent,
        ProgressComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
        //PageRoutingModule

    ]
})
export class PagesModule{}