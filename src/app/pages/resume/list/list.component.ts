import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private _resumeService: ResumeService, private router: Router) {}
  resumeListArr = [];

  ngOnInit(): void {
    this._resumeService.getResumeList().subscribe((res) => {
      console.log(res);
      this.resumeListArr = res;
    });
  }

  checkLength(): Boolean {
    return this.resumeListArr.length > 0;
  }

  redirectToAdd() {
    this.router.navigate(['resume', 'create', 'add']);
  }
}
