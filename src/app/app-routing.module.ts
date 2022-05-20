import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownComponent } from './down/down.component';
import { ResetComponent } from './reset/reset.component';
import { UpComponent } from './up/up.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: UpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'up',
    component: UpComponent
  },
  {
    path: 'down',
    component: DownComponent
  },
  {
    path: 'reset',
    component: ResetComponent
  },
  { path: '**', redirectTo: '/up' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
