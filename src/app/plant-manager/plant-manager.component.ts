import { Component, OnInit } from '@angular/core';
import { PlantManagerService } from './plant-manager.service';
import { Observable } from 'rxjs';
import { Plant } from '../model/Plant';
import { PlantFilter } from '../enum/PlantFilter';

@Component({
  selector: 'app-plant-manager',
  templateUrl: './plant-manager.component.html',
  styleUrls: ['./plant-manager.component.css']
})
export class PlantManagerComponent implements OnInit {

  plants: Observable<Plant[]>;

  constructor(
    private plantManagerService: PlantManagerService
  ) { }

  ngOnInit(): void {
    this.plants = this.plantManagerService.getPlants();
  }

  onFilterAllClick() {
    this.plantManagerService.filter = PlantFilter.ALL;
  }

  onFilterWateredClick() {
    this.plantManagerService.filter = PlantFilter.WATERED;
  }

  onFilterToWaterClick() {
    this.plantManagerService.filter = PlantFilter.TO_WATER;
  }
}
