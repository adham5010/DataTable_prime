import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CarsoulComponent } from './carsoul/carsoul.component';
const routes: Routes = [
    { path: 'carsoul', component:CarsoulComponent},    
    { path: '', component:AppComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }