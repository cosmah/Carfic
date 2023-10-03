import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; 
import { HomeComponent } from './home/home.component';
import { GarageComponent } from './garage/garage.component';

const routes: Routes = [
  {component: HomeComponent,
  path:''},
  { path: 'about', component: AboutComponent },
  {component: GarageComponent,
  path:'garage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
