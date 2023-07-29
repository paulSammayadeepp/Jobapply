import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumeService } from 'src/app/services/resume.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckboxRequired } from 'src/app/validators/checkboxRequired';

export interface checkbox {
  name: string,
  value: string,
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  pageType = '';
  ResumeForm!: FormGroup;
  warningModal: boolean = false;
  careers:checkbox[] = [
    {
      name: 'primary school',
      value: 'primary school',
    },
    {
      name: 'middle school',
      value: 'middle school',
    },
    {
      name: 'high school',
      value: 'high school',
    },
    {
      name: 'college',
      value: 'college',
    },
    {
      name: 'university',
      value: 'university',
    },
    {
      name: 'post graduate',
      value: 'post graduate',
    },
  ];

  desiredDays:checkbox[] = [
    {
      name: 'Mon-Fri',
      value: 'Mon-Fri',
    },
    {
      name: 'Mon-Sat',
      value: 'Mon-Sat',
    },
    {
      name: ' Mon-Sun',
      value: ' Mon-Sun',
    },
    {
      name: 'Weekend',
      value: 'Weekend',
    },
    {
      name: '4 days a week',
      value: '4 days a week',
    },
    {
      name: '6 days a week',
      value: '6 days a week',
    },
  ];

  desiredHours:checkbox[] = [
    {
      name: 'Morning',
      value: 'Morning',
    },
    {
      name: 'Afternoon',
      value: 'Afternoon',
    },
    {
      name: 'Evening',
      value: 'Evening',
    },
    {
      name: 'Dawn',
      value: 'Dawn',
    },
    {
      name: 'All Day',
      value: 'All Day',
    },
  ];

  desiredPeriods:checkbox[] = [
    {
      name: '1 week to 1 month',
      value: '1 week to 1 month',
    },
    {
      name: '1 to 3 months',
      value: '1 to 3 months',
    },
    {
      name: '3 to 6 months',
      value: '3 to 6 months',
    },
    {
      name: ' 6 to 12 months',
      value: ' 6 to 12 months',
    },
    {
      name: 'Over 1 year',
      value: 'Over 1 year',
    },
    {
      name: "1 day",
      value: "1 day"
    }
  ];
  employmentType:checkbox[] = [
    {
      name: 'Full Time',
      value: 'Full Time',
    },
    {
      name: 'Part Time',
      value: 'Part Time',
    },
    {
      name: 'Contract Worker',
      value: 'Contract Worker',
    },
    {
      name: 'Internship',
      value: 'Internship',
    },
    {
      name: 'Freelancer',
      value: 'Freelancer',
    },
  ];

  constructor(
    private activeRoute: ActivatedRoute,
    private resumeService: ResumeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  getValBoolean(arr: checkbox[], checkArr: any[]): any[] {
    let retunArr: any[] = []
    arr.forEach((res) => {
      if (checkArr.includes(res.value)) {
        retunArr.push(true)
      } else {
        retunArr.push(false)
      }
    })
    return retunArr;
  }

  ngOnInit(): void {
    this.initializeForm();
    this.activeRoute.params.subscribe((d) => {
      console.log('router params', d);
      this.pageType = d.type == 'add' ? 'Add' : 'Edit';
      if (d.type !== 'add') {
        this.resumeService
          .detailResume(this.activeRoute.snapshot.queryParams?.['pid'])
          .subscribe((resumeDetails) => {
            console.log(resumeDetails);
            let resumeDt = {
              resume_title: resumeDetails.resume_title,
              last_educational_background: resumeDetails.last_educational_background,
              career_type: resumeDetails.career,
              working_days: this.getValBoolean(this.desiredDays, resumeDetails.working_days),
              working_hours: this.getValBoolean(this.desiredHours, resumeDetails.working_hours),
              working_periods: this.getValBoolean(this.desiredPeriods, resumeDetails.working_periods),
              employment_type: this.getValBoolean(this.employmentType, resumeDetails.employment_type),
              self_introduction: resumeDetails.self_introduction
            }
            this.ResumeForm.patchValue(resumeDt);
          });
      }
    });
  }



  initializeForm() {
    this.ResumeForm = this.formBuilder.group({
      resume_title: ['', Validators.required],
      last_educational_background: ['primary school', Validators.required],
      career_type: ['', Validators.required],
      working_days: this.formBuilder.array(
        this.desiredDays.map((day) => false),
        CheckboxRequired()
      ),
      working_hours: this.formBuilder.array(
        this.desiredHours.map((hour) => false),
        CheckboxRequired()
      ),
      working_periods: this.formBuilder.array(
        this.desiredPeriods.map((period) => false),
        CheckboxRequired()
      ),
      employment_type: this.formBuilder.array(
        this.employmentType.map((employment) => false),
        CheckboxRequired()
      ),
      self_introduction: ['', Validators.required],
    });
  }

  getValueArr(arr: [], checkArr: checkbox[]): any[] {
    return arr
      .map((value, i) => value && checkArr[i].value)
      .filter((val) => !!val);
  }

  finalSubmit() {
    console.log(this.ResumeForm);
    if (this.ResumeForm.valid) {
      let formSetData = this.ResumeForm.value;
      let inputData = {
        ...this.ResumeForm.value,
        working_days: this.getValueArr(
          formSetData.working_days,
          this.desiredDays
        ),
        working_hours: this.getValueArr(
          formSetData.working_hours,
          this.desiredHours
        ),
        working_periods: this.getValueArr(
          formSetData.working_periods,
          this.desiredPeriods
        ),
        employment_type: this.getValueArr(
          formSetData.employment_type,
          this.desiredPeriods
        ),
        work_places: [{
          work_place_first: 6,
          work_place_second: '',
        }],
        occupations: [{
          occupation_first: 2,
          occupation_second: '',
        }],
        is_default: "0",
        is_temporary: "0",
        selfPrPhotoVideo: [],
        selfPrOtherDocs: [],
      };
      console.log('inputData', inputData);
      if (this.pageType === "add") {
        this.resumeService.addResume(inputData).subscribe((res) => {
          console.log(res);
        })
      }
    } else {
      console.log('not valid');
      this.ResumeForm.markAllAsTouched();
    }
  }

  WarnModalStatus(event: any) {
    this.warningModal = event.status;
    if(event.redirectState) {
      this.router.navigate(['resume','list'])
    }
  }
}
