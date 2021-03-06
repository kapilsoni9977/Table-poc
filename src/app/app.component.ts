import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

export interface PeriodicElement {
  name: string;
  position: number;
  dob: string;
  ed: string;
  gender: string;
  phone: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'John Smith',
    dob: '02/14/1988',
    ed: '02/14/1988',
    gender: 'M',
    phone: 9988,
  },
  {
    position: 2,
    name: 'Jennifer McArthur',
    dob: '02/14/1988',
    ed: '02/14/1988',
    gender: 'F',
    phone: 9988,
  },
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  displayedColumns: any[] = [
    'position',
    'name',
    'dob',
    'ed',
    'gender',
    // 'phone',
  ];
  dataSource = ELEMENT_DATA;
}
