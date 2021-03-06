import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './public/about/about.component';
import { DemoComponent } from './public/demo/demo.component';
import { DocsComponent } from './public/docs/docs.component';
import { TermsOfServiceComponent } from './public/terms-of-service/terms-of-service.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'demo',
    component: DemoComponent,
    pathMatch: 'full',
  },
  {
    path: 'docs',
    component: DocsComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: DemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
