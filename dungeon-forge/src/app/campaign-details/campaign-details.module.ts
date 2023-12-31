import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';

import { CampaignDetailsPageRoutingModule } from './campaign-details-routing.module';

import { CampaignDetailsPage } from './campaign-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignDetailsPageRoutingModule,
    ScrollingModule,
  ],
  declarations: [CampaignDetailsPage]
})
export class CampaignDetailsPageModule {}
