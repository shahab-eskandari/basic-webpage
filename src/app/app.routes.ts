import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PledgeDetailComponent } from "./pledge-detail/pledge-detail.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: PledgeDetailComponent,
    title: 'Home details'
  }
];
