import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationDetailComponent } from './components/application-detail/application-detail.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: ApplicationListComponent },
  { path: 'apps/:id', component: ApplicationDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
