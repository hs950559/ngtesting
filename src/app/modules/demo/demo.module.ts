import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { MaterialModule } from '../material.module';
import { CapitalizePipe } from 'src/app/shared/pipes/capitalize.pipe';
import { FileSizePipe } from 'src/app/shared/pipes/file-size.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    DemoComponent,
    CapitalizePipe,
    FileSizePipe,
    FilterPipe,
    OrderByPipe,
  ],
  imports: [TooltipModule, CommonModule, DemoRoutingModule, MaterialModule],
})
export class DemoModule {}
