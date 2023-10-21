import { Component } from '@angular/core';
import { Empolyee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employees: Empolyee[] = []
  constructor(private employeeService: EmployeesService){

  }
  ngOnInit(): void{
    this.employeeService.getAllEmployees()
    .subscribe({
      next: (employees)=> {
        this.employees = employees;
        
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
