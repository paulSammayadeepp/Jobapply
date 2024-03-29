import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
// import { ResumeService } from 'src/app/services/resume.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WarningModalComponent } from './create/warning-modal/warning-modal.component';
import { OccupationModalComponent } from './create/occupation-modal/occupation-modal.component';
import { WorkplaceModalComponent } from './create/workplace-modal/workplace-modal.component';


@NgModule({
  declarations: [
    ResumeComponent,
    ListComponent,
    CreateComponent,
    DetailComponent,
    WarningModalComponent,
    OccupationModalComponent,
    WorkplaceModalComponent,
    // LocalDatePipe,
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    // ResumeService
  ]
})
export class ResumeModule { }
