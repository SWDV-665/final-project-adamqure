import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignGenerationFormPage } from './campaign-generation-form.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignGenerationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignGenerationFormPageRoutingModule {}
