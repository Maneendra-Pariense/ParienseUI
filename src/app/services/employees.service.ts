import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empolyee } from '../models/employee.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Empolyee[]>{
    return this.http.get<Empolyee[]>(this.baseApiUrl + "/Employees/GetAllEmployees")
  }
}
