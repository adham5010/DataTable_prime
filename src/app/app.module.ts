import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'


import {DataTableModule} from 'primeng/datatable';
import {MultiSelectModule} from 'primeng/multiselect';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { UsersService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { CarsoulComponent } from './carsoul/carsoul.component';
import {CarouselModule} from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CarsoulComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,    
    DataTableModule,
    MultiSelectModule,
    FormsModule,
    CarouselModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
