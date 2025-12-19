import { Routes } from '@angular/router';
import { Calculator } from './pages/calculator/calculator';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: 'calculator', component: Calculator },
  { path: '', component: Home },
];
