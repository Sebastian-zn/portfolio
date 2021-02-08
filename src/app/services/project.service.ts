import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class ProjectService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  testService() {
    return 'Testing the angular service';
  }

  saveProject(project: Project): Observable<any> {
    let params = JSON.stringify(project);
    let header = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.post(this.url + 'save', params, { headers: header });
  }

  getProjects(): Observable<any> {
    let header = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get(this.url + 'projects', { headers: header });
  }

  getProject(id): Observable<any> {
    let header = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get(this.url + 'project/' + id, { headers: header });
  }

  deleteProject(id): Observable<any> {
    let header = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.delete(this.url + 'project/' + id, { headers: header });
  }
}
