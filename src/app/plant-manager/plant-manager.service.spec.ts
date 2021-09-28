import { TestBed } from '@angular/core/testing';

import { PlantManagerService } from './plant-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { Plant } from '../model/Plant';

describe('PlantManagerService', () => {
  let service: PlantManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PlantManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should format the date correctly', () => {
    const day: string = service.formatNumber(7);
    expect(day).toBe("07");
  });

  it('should not format the date already formatted', () => {
    const day: string = service.formatNumber(23);
    expect(day).toBe("23");
  });

  it('should not format the date already formatted', () => {
    const plant: Plant = {
      "id": 1,
      "name": "Misère",
      "subname": "Tradescentia zebrina",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Silvery_Wandering_Jew_%28Tradescantia_zebrina%29_3.jpg",
      "description": "Tradescantia zebrina, autrefois appelée Zebrina pendula, est une espèce de plante (en: spiderwort) plus couramment connue sous le nom de \"misère\" ( en anglais « wandering jew »). Le nom courant est aussi employé pour des variétés très proches : T. fluminensis et T. pallida.",
      "nb_days_between_watering": "7",
      "last_watering": {
        "date": "2021-06-20",
        "time": "18:00:00"
      }
    };
    const lastDateWatering: Date = service.getLastDateWatering(plant);
    expect(lastDateWatering).toEqual(new Date("2021-06-20T18:00:00"));
  });

  it('should not format the date already formatted', () => {
    const plant: Plant = {
      "id": 1,
      "name": "Calathea",
      "subname": "Marantaceae",
      "image_url": "https://www.reconciliationvegetale.com/wp-content/uploads/2020/01/CALATHEA-ORBIFOLIA-AMBIANCE.jpg",
      "description": "Calathea est un genre de plantes monocotylédones appartenant à la famille des Marantaceae. Ce genre comprend aujourd'hui 56 espèces de plantes herbacées. De nombreuses espèces autrefois classées dans le genre Calathea sont aujourd'hui classées dans le genre Goeppertia 3. Quelques espèces sont cultivées pour leurs grandes feuilles. Le Calathea a pour origine l'Amérique du sud et plus encore les forêts chaudes et humides.",
      "nb_days_between_watering": "1",
      "last_watering": {
        "date": "2021-06-23",
        "time": "10:00:00"
      }
    };
    const lastDateWatering: Date = service.getLastDateWatering(plant);
    expect(lastDateWatering).not.toEqual(new Date("2021-06-23T10:00:01"));
  });
});
