import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitaisRoutingModule } from './capitais-routing.module';
import { CapitaisComponent } from './capitais.component';
import { SharedModule } from '../shared/shared.module';
import { CapitaisService } from './services/capitais.service';

@NgModule({
  declarations: [CapitaisComponent],
  imports: [CommonModule, CapitaisRoutingModule, SharedModule],
  providers: [CapitaisService],
})
export class CapitaisModule {}
