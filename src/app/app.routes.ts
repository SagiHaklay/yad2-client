import { Routes } from '@angular/router';
import { RealEstatePage } from './real-estate/real-estate-page/real-estate-page';
import { realEstateListResolver } from './real-estate/real-estate-list-resolver';
import { NotFoundPage } from './not-found-page/not-found-page';
import { RealEstateAdDetail } from './real-estate/real-estate-ad-detail/real-estate-ad-detail';

export const routes: Routes = [
    { path: '', redirectTo: '/realestate', pathMatch: 'full' },
    { 
        path: 'realestate', 
        component: RealEstatePage, 
        resolve: {
            ads: realEstateListResolver
        }
    },
    {
        path: 'realestate/:id',
        component: RealEstateAdDetail
    },
    { path: '**', component: NotFoundPage }
];
