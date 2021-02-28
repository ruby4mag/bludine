import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
//import { Person } from './person';
declare var yadcf: any;
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  //selector: 'app-server-side-angular-way',
  templateUrl: 'tables.component.html',
  //styleUrls: ['server-side-angular-way.component.css']
})
export class TablesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  persons: Person[];
  table: any;
  yadcf: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const that = this;
    var events_table = $('#events_table')
      .DataTable({
        pagingType: 'full_numbers',
        pageLength: 10,
        serverSide: true,
        processing: true,
        //searching: false,
        stateSave: true,
        destroy: true,
        ajax: (dataTablesParameters: any, callback) => {
          that.http
            .post<DataTablesResponse>(
              'https://angular-datatables-demo-server.herokuapp.com/',
              dataTablesParameters, {}
            ).subscribe(resp => {
              that.persons = resp.data;
              callback({
                recordsTotal: resp.recordsTotal,
                recordsFiltered: resp.recordsFiltered,
                data: []
              });
            });
        },
        columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
      });

    $('#events_table').on('xhr.dt', function () {
      //alert("magin")
      //events_table.draw();
    });
    yadcf.init(events_table, [
      {
        column_number: 1,
        filter_type: "text"
      }, {
        column_number: 2,
        filter_type: "text"
      }
    ]);
    //events_table.ajax.reload(null, false);
  }

}
