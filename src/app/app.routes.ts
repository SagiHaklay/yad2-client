import { Routes } from '@angular/router';
import { RealEstatePage } from './real-estate/real-estate-page/real-estate-page';
import { realEstateListResolver } from './real-estate/real-estate-list-resolver';
import { NotFoundPage } from './not-found-page/not-found-page';
import { RealEstateAdDetail } from './real-estate/real-estate-ad-detail/real-estate-ad-detail';
import { realEstateAdResolver } from './real-estate/real-estate-ad-resolver';
import { ProfilePage } from './profile/profile-page/profile-page';
import { currentUserProfileResolver } from './profile/current-user-profile-resolver';
import { EditProfileForm } from './profile/edit-profile-form/edit-profile-form';
import { UserAds } from './profile/user-ads/user-ads';
import { SavedAds } from './profile/favorites/saved-ads/saved-ads';
import { favoritesResolver } from './profile/favorites/favorites-resolver';

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
            { path: '', redirectTo: '/profile/my-ads', pathMatch: 'full' },
            { path: 'my-ads', component: UserAds },
            { path: 'edit', component: EditProfileForm },
            { 
                path: 'my-favorites', 
                component: SavedAds,
                resolve: {
                    favorites: favoritesResolver
                } 
            }
        ]
    },
    { path: '**', component: NotFoundPage }
];
