// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { worker } from './pages/worker/worker';
import { Business } from './pages/business/business';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'worker', component: worker },
  { path: 'business', component: Business }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
