import { Routes } from '@angular/router';
import { DsComponent } from './ds/ds.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'ds', component: DsComponent }
];
