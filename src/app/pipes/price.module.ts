import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PricePipe} from './price.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PricePipe],
  exports: [PricePipe]
})
export class PriceModule { }
