import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [ProgressComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgressComponent] //添加的
})
export class AirubbyUIModule { }
