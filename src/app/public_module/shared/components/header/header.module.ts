import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, TranslocoModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
