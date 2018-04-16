import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {EquipmentComponent} from "./equipment/equipment.component";
import {EquipmentService} from "./shared/services/equipment/api/equipment.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [EquipmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
