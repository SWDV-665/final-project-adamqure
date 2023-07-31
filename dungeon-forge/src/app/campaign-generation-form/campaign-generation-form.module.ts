import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaignGenerationFormPageRoutingModule } from './campaign-generation-form-routing.module';

import { CampaignGenerationFormPage } from './campaign-generation-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignGenerationFormPageRoutingModule
  ],
  declarations: [CampaignGenerationFormPage]
})
export class CampaignGenerationFormPageModule {}
