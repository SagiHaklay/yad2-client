import { Routes } from '@angular/router';
import { RealEstatePage } from './real-estate/real-estate-page/real-estate-page';

export const routes: Routes = [
    { path: '', redirectTo: '/realestate' },
    { path: 'realestate', component: RealEstatePage },
];
