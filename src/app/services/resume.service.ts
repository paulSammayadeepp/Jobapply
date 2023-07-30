import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor(private http: HttpClient) { }
  private TotalOccupationFilter = new BehaviorSubject<Occupation[]>([])

  getResumeList(): Observable<any> {
    return this.http.get(`/resume/resume-list`);
  }
  deleteResume(id: string): Observable<any> {
    return this.http.delete(`/resume/resume-delete?data=${id}`);
  }
  addResume(data: any): Observable<any> {
    return this.http.post('/resume/add-resume', data);
  }
  editResume(id: string, data: any): Observable<any> {
    return this.http.put(`/resume/edit-resume/${id}`, data);
  }
  detailResume(id: string): Observable<any> {
    return this.http.get(`/resume/resume-details/${id}`);
  }
}

export interface Occupation {
  occupation_first: number,
  occupation_second: number,
  occupation_third: number[]
}
