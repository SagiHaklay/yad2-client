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
import { LoginForm } from './auth/login-form/login-form';
import { authenticatedGuard } from './auth/authenticated-guard';
import { AuthPage } from './auth/auth-page/auth-page';
import { RegisterForm } from './auth/register-form/register-form';
import { loggedOffGuard } from './auth/logged-off-guard';
import { PublishRealEstateAdPage } from './real-estate/publish-real-estate-ad-page/publish-real-estate-ad-page';
import { NavbarType } from './navbar/navbar-type';
import { RealEstateAdsPage } from './real-estate/real-estate-ads-page/real-estate-ads-page';
import { RegisterStep2Form } from './auth/register-step2-form/register-step2-form';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
    { path: '', component: HomePage, pathMatch: 'full' },
    { 
        path: 'realestate', 
        component: RealEstatePage, 
        data: {
            navbarType: NavbarType.Default
        },
        children: [
            {
                path: '',
                component: RealEstateAdsPage,
                pathMatch: 'full',
                resolve: {
                    ads: realEstateListResolver
                }
            },
            {
                path: ':id',
                component: RealEstateAdDetail,
                resolve: {
                    ad: realEstateAdResolver
                }
            }
        ]
    },
    // {
    //     path: 'realestate/:id',
    //     component: RealEstateAdDetail,
    //     resolve: {
    //         ad: realEstateAdResolver
    //     },
    //     data: {
    //         navbarType: NavbarType.Default
    //     }
    // },
    {
        path: 'profile',
        component: ProfilePage,
        resolve: {
            profile: currentUserProfileResolver
        },
        canActivate: [authenticatedGuard],
        data: {
            navbarType: NavbarType.Profile
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
    {
        path: 'auth',
        component: AuthPage,
        canActivate: [loggedOffGuard],
        children: [
            { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
            { path: 'login', component: LoginForm },
            { path: 'register', redirectTo: '/auth/register/step1', pathMatch: 'full' },
            { path: 'register/step1', component: RegisterForm },
            { path: 'register/step2', component: RegisterStep2Form }
        ]
    },
    {
        path: 'publish',
        component: PublishRealEstateAdPage,
        canActivate: [authenticatedGuard],
        data: {
            navbarType: NavbarType.Publish
        }
    },
    { path: '**', component: NotFoundPage }
];
