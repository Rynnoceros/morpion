import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';

const ROUTES: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    redirectTo:'/',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class RoutingModule { }
