import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path :'new',component:NewComponent},
  {path :'edit/:id',component:EditComponent},
  {path :'',component:HomeComponent},
  {path :'show/:id',component:ShowComponent},
  {path :'review/:id',component:ReviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

