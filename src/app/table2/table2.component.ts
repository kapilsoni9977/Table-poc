import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  dob: string;
  ed: string;
  gender: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'John Smith',
    dob: '02/14/1988',
    ed: '02/14/1988',
    gender: 'M',
    action: '',
  },
  {
    position: 2,
    name: 'Jennifer McArthur',
    dob: '02/14/1988',
    ed: '02/14/1988',
    gender: 'F',
    action: '',
  },
];

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css'],
})
export class Table2Component implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  name = 'Angular';
  displayedColumns: any[] = [
    'position',
    'name',
    'dob',
    'ed',
    'gender',
    'action',
  ];
  dataSource = ELEMENT_DATA;
}
