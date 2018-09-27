import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrowthFallPipe} from './growth-fall.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GrowthFallPipe],
  exports: [GrowthFallPipe]
})
export class GrowthFallModule { }
