import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LocalDatePipe } from '../pipes/local-date.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LocalDatePipe],
  exports: [HeaderComponent, FooterComponent, LocalDatePipe],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
