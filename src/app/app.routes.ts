import { Routes } from '@angular/router';
import { MeanComponent } from '../home/mean/mean.component';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { HomeManageComponent } from '../home/home-manage/home-manage.component';
import { DetailNowComponent } from '../home/home-manage/now/detail-now/detail-now.component';

export const routes: Routes = [
    {
        path:"",
        component:MeanComponent,
        children:[
            {
                path:'homepage',
                component:HomePageComponent,
                children:[
                    
                ]
            },
            {
                path:'homemanage',
                component:HomeManageComponent,
                children:[
                    {
                        path:'detailnow',
                        component:DetailNowComponent,
                    }
                ]
            }
        
        ]
    },
];
