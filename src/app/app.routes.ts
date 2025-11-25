import { Routes } from '@angular/router';
import { RealEstatePage } from './real-estate/real-estate-page/real-estate-page';
import { realEstateListResolver } from './real-estate/real-estate-list-resolver';

export const routes: Routes = [
    { path: '', redirectTo: '/realestate', pathMatch: 'full' },
    { 
        path: 'realestate', 
        component: RealEstatePage, 
        resolve: {
            ads: realEstateListResolver
        }
    },
];
