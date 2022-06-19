import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderNavModule } from './shared/components/header-nav/header-nav.module';

@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, PublicRoutingModule, HeaderNavModule],
})
export class PublicModule {}
