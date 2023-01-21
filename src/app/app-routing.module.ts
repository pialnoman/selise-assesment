import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarEntryComponent } from './components/car-entry/car-entry.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'car-entry', component: CarEntryComponent},
  {path: 'car-list', component: CarListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
