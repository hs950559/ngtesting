import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, MaterialModule],
})
export class DemoModule {}
