import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EasyComponent} from './Questions/easy/easy.component';
import {MediumComponent} from './Questions/medium/medium.component';
const routes: Routes = [
  { path: 'easy', component: EasyComponent },
  { path: 'medium', component: MediumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
