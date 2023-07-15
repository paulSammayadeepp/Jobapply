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


@NgModule({
  declarations: [
    ResumeComponent,
    ListComponent,
    CreateComponent,
    DetailComponent,
    // LocalDatePipe,
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    // ResumeService
  ]
})
export class ResumeModule { }
