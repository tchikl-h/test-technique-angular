import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlantManagerComponent } from './plant-manager/plant-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantManagerService } from './plant-manager/plant-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlantManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [PlantManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
