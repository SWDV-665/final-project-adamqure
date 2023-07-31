import { Component, OnInit } from '@angular/core';
import { CampaignFormResponse } from '../data-objects/campaign-form-response';
import { Router } from '@angular/router';
import { CampaignDataSourceService } from '../services/campaign-data-source.service';

@Component({
  selector: 'app-campaign-generation-form',
  templateUrl: './campaign-generation-form.page.html',
  styleUrls: ['./campaign-generation-form.page.scss'],
})
export class CampaignGenerationFormPage implements OnInit {
  // Constants
  private static numPlayers: number = 1
  private static minStartLevel: number = 1
  private static minEndLevel: number = 5

  // Internal Variables
  numPlayers = CampaignGenerationFormPage.numPlayers
  startLevel = CampaignGenerationFormPage.minStartLevel
  endLevel = CampaignGenerationFormPage.minEndLevel
  rolePlayScale: number | undefined
  trapScale: number | undefined
  puzzlesScale: number | undefined
  combatScale: number | undefined

  // Picker Options

  // Num Character Pickers
  public numCharacterPickerButtons = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Done',
      handler: (option: any) => {
        console.log("Number of Characters Picked", option.numPlayers)
        if ('value' in option.numPlayers) {
          this.numPlayers = parseInt(option.numPlayers.value)
        }
      }
    }
  ]

  public numCharacterPickerColumns = [
    {
      name: 'numPlayers',
      options: [
        {
          text: "1",
          value: '1',
        },
        {
          text: "2",
          value: '2',
        },
        {
          text: "3",
          value: '3',
        },
        {
          text: "4",
          value: '4',
        },
        {
          text: "5",
          value: '5',
        },
        {
          text: "6",
          value: '6',
        },
        {
          text: "7",
          value: '7',
        },
        {
          text: "8",
          value: '8',
        },
        {
          text: "9",
          value: '9',
        },
        {
          text: "10",
          value: '10',
        },
      ]
    }
  ]

  // Start Level Pickers
  public startLevelPickerButtons = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Done',
      handler: (option: any) => {
        console.log("Start Level Picked", option.startLevel)
        if ('value' in option.startLevel) {
          let value = option.startLevel.value
          if (this.validateLevelRange(value, this.endLevel)) {
            this.startLevel = value
          } else {
            // TODO - Add Error
            console.error("Invalid Start Level", value)
          }
        }
      }
    }
  ]

  public startLevelColumns = [
    {
      name: 'startLevel',
      options: [
        {
          text: "1",
          value: '1',
        },
        {
          text: "3",
          value: '3',
        },
        {
          text: "5",
          value: '5',
        },
        {
          text: "10",
          value: '10',
        },
      ]
    }
  ]

  // End Level Pickers
  public endLevelPickerButtons = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Done',
      handler: (option: any) => {
        console.log("End Level Picked", option.endLevel)
        if ('value' in option.endLevel) {
          let value = option.endLevel.value
          if (this.validateLevelRange(this.startLevel, value)) {
            this.endLevel = value
          } else {
            // TODO - Add Error
            console.error("Invalid End Level", value)
          }
        }
      }
    }
  ]

  public endLevelColumns = [
    {
      name: 'endLevel',
      options: [
        {
          text: "5",
          value: '5',
        },
        {
          text: "10",
          value: '10',
        },
        {
          text: "15",
          value: '15',
        },
        {
          text: "20",
          value: '20',
        },
      ]
    }
  ]

  constructor(private router: Router, private dataSource: CampaignDataSourceService) { }

  ngOnInit() {
  }

  submitForm() {
    if (!this.rolePlayScale) {
      console.error("No role play scale value selected")
      return
    }

    if (!this.trapScale) {
      console.error("No trap scale value selected")
      return
    }

    if (!this.puzzlesScale) {
      console.error("No puzzle scale value selected")
      return
    }

    if (!this.combatScale) {
      console.error("No combat scale value selected")
      return
    }

    let response = new CampaignFormResponse(
      this.numPlayers,
      this.startLevel,
      this.endLevel,
      this.rolePlayScale,
      this.trapScale,
      this.puzzlesScale,
      this.combatScale
    )

    console.log("Submitting generate campaign form", response)
    this.dataSource.createCampaign(response)
    this.router.navigate(['/campaigns'])
  }

  validateLevelRange(startLevel: number, endLevel: number): boolean {
    console.log("Comparing start and end levels", startLevel, endLevel)
    return startLevel < endLevel
  }

  updateRolePlayScale(newValue: any) {
    console.log("Updating the role play scale", newValue)
    this.rolePlayScale = parseInt(newValue.detail.value)
  }

  updateTrapScale(newValue: any) {
    console.log("Updating the trap scale", newValue)
    this.trapScale = parseInt(newValue.detail.value)
  }

  updatePuzzleScale(newValue: any) {
    console.log("Updating the puzzle scale", newValue)
    this.puzzlesScale = parseInt(newValue.detail.value)
  }

  updateCombatScale(newValue: any) {
    console.log("Updating the combat scale", newValue)
    this.combatScale = parseInt(newValue.detail.value)
  }
}
