import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '../model/Plant';
import { PlantFilter } from '../enum/PlantFilter';

export interface Token {
  id_token: string;
};

@Injectable({
  providedIn: 'root'
})
export class PlantManagerService {

  apiUrl: string = "http://localhost:3000";
  filter: PlantFilter = PlantFilter.ALL;
  token: Token;

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(`${this.apiUrl}/plants`);
  }

  putPlant(plant: Plant): void {
    this.http.put<Plant>(`${this.apiUrl}/plant`, plant)
      .subscribe({
        next: data => {
          console.log(data);
        },
        error: error => console.log(error)
      })
  }

  formatNumber(nb: number) {
    return ('0' + nb.toString()).slice(-2);
  }

  getCurrentDate(): string {
    var today = new Date();
    return `${today.getFullYear()}-${this.formatNumber(today.getMonth() + 1)}-${this.formatNumber(today.getDate())}`;
  }

  getCurrentTime(): string {
    var today = new Date();
    return `${this.formatNumber(today.getHours())}:${this.formatNumber(today.getMinutes())}:${this.formatNumber(today.getSeconds())}`;
  }

  getLastDateWatering(plant: Plant): Date {
    var lastDateWatering = new Date(`${plant.last_watering.date}T${plant.last_watering.time}`);
    return lastDateWatering;
  }
}
