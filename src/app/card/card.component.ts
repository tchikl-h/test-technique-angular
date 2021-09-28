import { Component, OnInit, Input } from '@angular/core';
import { PlantManagerService } from '../plant-manager/plant-manager.service';
import { Plant } from '../model/Plant';
import { PlantFilter } from '../enum/PlantFilter';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() plant: Plant;

  constructor(
    private plantManagerService: PlantManagerService
  ) { }

  ngOnInit(): void {
  }

  watering(plant: Plant): void {
    plant.last_watering.date = this.plantManagerService.getCurrentDate();
    plant.last_watering.time = this.plantManagerService.getCurrentTime();
    this.plantManagerService.putPlant(plant);
  }

  isPlantWatered(plant: Plant): boolean {
    let lastDateWatering: Date = this.plantManagerService.getLastDateWatering(plant);
    let nextDateWatering: Date = lastDateWatering;
    nextDateWatering.setDate(lastDateWatering.getDate() + parseInt(plant.nb_days_between_watering));
    const dateDifference = nextDateWatering.getTime() - new Date().getTime();
    if (dateDifference >= 0) {
      return true;
    }
    return false;
  }

  isCardDisplayed(plant: Plant): boolean {
    switch (this.plantManagerService.filter) {
      case PlantFilter.ALL:
        return true;
      case PlantFilter.WATERED:
        return this.isPlantWatered(plant);
      case PlantFilter.TO_WATER:
        return !this.isPlantWatered(plant);
    }
  }
}
