import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampaignGenerationFormPage } from './campaign-generation-form.page';

describe('CampaignGenerationFormPage', () => {
  let component: CampaignGenerationFormPage;
  let fixture: ComponentFixture<CampaignGenerationFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CampaignGenerationFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
