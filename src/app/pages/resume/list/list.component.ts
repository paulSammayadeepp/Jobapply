import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private _resumeService: ResumeService) {}
  resumeListArr!: [];

  ngOnInit(): void {
    this._resumeService.getResumeList().subscribe((res) => {
      console.log(res);
      this.resumeListArr = res;
    });
  }

  checkLength(): Boolean {
    return this.resumeListArr.length > 0;
  }
}
