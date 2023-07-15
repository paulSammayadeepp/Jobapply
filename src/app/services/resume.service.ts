import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor(private http: HttpClient) {}

  getResumeList(): Observable<any> {
    return this.http.get(`/resume/resume-list`);
  }
  deleteResume(id: string): Observable<any> {
    return this.http.delete(`/resume/resume-delete?data=${id}`);
  }
  addResume(data: any): Observable<any> {
    return this.http.post('resume/add-resume', data);
  }
  editResume(id: string, data: any): Observable<any> {
    return this.http.put(`resume/edit-resume/${id}`, data);
  }
}
