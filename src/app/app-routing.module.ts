import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterBikeComponent } from './components/register-bike/register-bike.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'registerBike', component: RegisterBikeComponent },
  //{ path: '**', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
