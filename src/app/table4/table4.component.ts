import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table4',
  templateUrl: './table4.component.html',
  styleUrls: ['./table4.component.css'],
})
export class Table4Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  filterValues = {};
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'PatientName',
    'SubmittedOn',
    'Claim',
    'EventType',
    'Nickname',
    'status',
  ];


  filterSelectObj = [];

  constructor() {
    // Object to create Filter for
    this.filterSelectObj = [
      {
        name: 'ID',
        columnProp: 'id',
        options: [],
      },
      {
        name: 'NAME',
        columnProp: 'name',
        options: [],
      },
      {
        name: 'USERNAME',
        columnProp: 'username',
        options: [],
      },
      {
        name: 'EMAIL',
        columnProp: 'email',
        options: [],
      },
     
    ];
  }

  ngOnInit() {
    this.getRemoteData();
  }

  getRemoteData() {
    const remoteDummyData = [
     
      {
        id: 1,
        PatientName: 'Jennifer McArthart',
        SubmittedOn: '04/14/2020',
        Claim: '123456789',
        EventType: 'Loremi',
        Nickname: 'Loremi',
        status: '',
      },
      {
        id: 2,
        PatientName: 'Jennifer McArthart',
        SubmittedOn: '04/14/2020',
        Claim: '123456789',
        EventType: 'Loremi',
        Nickname: 'Loremi',
        status: '',
      },
     
    ];
    this.dataSource.data = remoteDummyData;

  }

}
