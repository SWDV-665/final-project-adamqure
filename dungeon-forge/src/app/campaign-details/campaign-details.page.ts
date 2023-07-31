import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CampaignDataSourceService } from '../services/campaign-data-source.service';
import { Campaign } from '../data-objects/campaign';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.page.html',
  styleUrls: ['./campaign-details.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CampaignDetailsPage implements OnInit {
  campaign: Campaign | undefined

  constructor(private route : ActivatedRoute, private router : Router, private dataSource: CampaignDataSourceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.dataSource.getCampaign(id).then((campaign) => {
        this.campaign = campaign
      })
   });
  }
}
