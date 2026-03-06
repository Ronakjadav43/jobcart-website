// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { worker } from './pages/worker/worker';
import { Business } from './pages/business/business';


import { Blog } from './pages/blog/blog';
import { BlogDetail } from './pages/blog-detail/blog-detail';
import { Contact } from './pages/contact/contact';
import { CookiePolicy } from './pages/cookie-policy/cookie-policy';
import { Terms } from './pages/terms/terms';
import { Privacy } from './pages/privacy/privacy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'worker', component: worker },
  { path: 'business', component: Business },


   { path: 'blog', component: Blog },
  { path: 'blog/:slug', component: BlogDetail },

  

  { path: 'contact', component: Contact },
  { path: 'cookie-policy', component: CookiePolicy },
  { path: 'terms-of-service', component: Terms },
  { path: 'privacy-policy', component: Privacy }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
