import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Campaign } from '../data-objects/campaign';
import { CampaignDataSourceService } from '../services/campaign-data-source.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  campaigns: Observable<Campaign[]> = new Observable()
  private campaignList: Subject<Campaign[]>

  constructor(private dataSource: CampaignDataSourceService) {
    this.campaignList = new Subject<Campaign[]>()
    this.campaigns = this.campaignList.asObservable()
  }

  ngOnInit() {
    this.dataSource.dataChanged.subscribe((_updated) => {
      this.dataSource.getAllCampaigns().then((campaigns) => {
        console.log("Received Campaigns:", campaigns)
        this.campaignList.next(campaigns)
      })
    });
  }

  ionViewWillEnter(): void {
    this.dataSource.getAllCampaigns().then((campaigns) => {
      console.log("Received Campaigns:", campaigns)
      this.campaignList.next(campaigns)
    })
  }
}
