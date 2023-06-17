import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ResumeModule } from './resume.module';

const routes: Routes = [
  {
    path: 'resume',
    component: ResumeModule,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'create/:type/:id?', component: CreateComponent },
      { path: 'details/:id', component: DetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
