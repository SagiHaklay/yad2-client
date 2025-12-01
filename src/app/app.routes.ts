import { Routes } from '@angular/router';
import { RealEstatePage } from './real-estate/real-estate-page/real-estate-page';
import { realEstateListResolver } from './real-estate/real-estate-list-resolver';
import { NotFoundPage } from './not-found-page/not-found-page';
import { RealEstateAdDetail } from './real-estate/real-estate-ad-detail/real-estate-ad-detail';
import { realEstateAdResolver } from './real-estate/real-estate-ad-resolver';
import { ProfilePage } from './profile/profile-page/profile-page';
import { currentUserProfileResolver } from './profile/current-user-profile-resolver';
import { EditProfileForm } from './profile/edit-profile-form/edit-profile-form';

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
        component: RealEstateAdDetail,
        resolve: {
            ad: realEstateAdResolver
        }
    },
    {
        path: 'profile',
        component: ProfilePage,
        resolve: {
            profile: currentUserProfileResolver
        },
        children: [
            { path: 'edit', component: EditProfileForm }
        ]
    },
    { path: '**', component: NotFoundPage }
];
