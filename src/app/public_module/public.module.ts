import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { FooterModule } from './shared/components/footer/footer.module';
import { HeaderModule } from './shared/components/header/header.module';

@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, PublicRoutingModule, HeaderModule, FooterModule],
})
export class PublicModule {}
