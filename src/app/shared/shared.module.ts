import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LocalDatePipe } from '../pipes/local-date.pipe';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LocalDatePipe, ModalDialogComponent, CustomModalComponent],
  exports: [HeaderComponent, FooterComponent, LocalDatePipe, ModalDialogComponent, CustomModalComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
