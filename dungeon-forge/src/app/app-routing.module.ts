import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'campaigns',
    pathMatch: 'full'
  },
  {
    path: 'campaign/:id',
    loadChildren: () => import('./campaign-details/campaign-details.module').then( m => m.CampaignDetailsPageModule)
  },
  {
    path: 'campaigns/create',
    loadChildren: () => import('./campaign-generation-form/campaign-generation-form.module').then( m => m.CampaignGenerationFormPageModule)
  },
  {
    path: 'campaigns',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
