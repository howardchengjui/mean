import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { OaklandComponent } from './oakland/oakland.component';


const routes: Routes = [
  { path: '',component : HomeComponent},
  { path: 'dallas',component : DallasComponent},
  { path: 'chicago',component : ChicagoComponent},
  { path: 'seattle',component : SeattleComponent},
  { path: 'sanjose',component : SanjoseComponent},
  { path: 'oakland',component : OaklandComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
