import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';

@NgModule({
    declarations: [ProgressComponent, RowComponent, ColComponent],
    imports: [
        CommonModule
    ],
    exports: [
        ProgressComponent,RowComponent,ColComponent
    ] //添加的
})
export class AirubbyUIModule { }
