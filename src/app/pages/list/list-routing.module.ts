import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list.component';
import {CoinComponent} from '../coin/coin.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: ':id',
    component: CoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
