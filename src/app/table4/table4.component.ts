import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  state: string;
  dob: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Loremipsumn',
    state: 'New Hampshire',
    dob: '03/20/1966',
    action: '',
  },
  {
    name: 'Jane Smith',
    state: 'New York',
    dob: '03/22/1980',
    action: '',
  },

  {
    name: 'Jane Smith',
    state: 'Alabama',
    dob: '04/17/1980',
    action: '',
  },
];

@Component({
  selector: 'app-table4',
  templateUrl: './table4.component.html',
  styleUrls: ['./table4.component.css'],
})
export class Table4Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  name = 'Angular';
  displayedColumns: any[] = ['action', 'name', 'state', 'dob'];
  dataSource = ELEMENT_DATA;
}
