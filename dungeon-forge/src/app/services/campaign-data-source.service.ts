import { Injectable } from '@angular/core';
import { CampaignGeneratorService } from './campaign-generator.service';
import { LocalStorageService } from './local-storage.service';
import { CampaignFormResponse } from '../data-objects/campaign-form-response';
import { Campaign } from '../data-objects/campaign';
import { CampaignEvent } from '../data-objects/campaign-event';
import { CampaignSetting } from '../data-objects/campaign-setting';
import { Observable, Subject } from 'rxjs';
import { CombatEvent, RolePlayEvent, TrapEvent } from '../data-objects/event';
import { Adventure } from '../data-objects/adventure';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataSourceService {
  dataChanged: Observable<boolean>;
  private dataChangeSubject: Subject<boolean>;
  campaigns: Campaign[] = []

  constructor(private generatorService: CampaignGeneratorService, private localStorageService: LocalStorageService) { 
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged = this.dataChangeSubject.asObservable();
    console.log("Campaign Data Source Service Initialized");
  }

  async getAllCampaigns(): Promise<Campaign[]> {
    console.log("Fetching all campaigns");
    await this.localStorageService.getCampaignList().then((response) => {
      this.campaigns = response
    }) 
    return this.campaigns;
  }

  getCampaign(withID: string | undefined | null): Promise<Campaign> {
    console.log("Fetching campaign", withID);
    return this.localStorageService.getCampaign(withID)
  }

  deleteCampaign(campaign: Campaign) {
    console.log("Deleting campaign", campaign);
  }

  createCampaign(formResponse: CampaignFormResponse) {
    console.log("Creating campaign with parameters", formResponse);
    let newCampaign = this.generatorService.generateCampaign(formResponse);
    this.localStorageService.createCampaign(newCampaign, () => {
      this.dataChangeSubject.next(true);
    })
  }
}
