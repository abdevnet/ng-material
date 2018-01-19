import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { UserService } from './services/user.service';
import { User } from './models/user.model';
import { MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  @ViewChild(MatPaginator) pagination: MatPaginator;

  dataSource: UserDataSource = null;

  displayedColumns = ['name', 'email', 'phone', 'company'];
  pageEvent: PageEvent;
  data: any;

  // Pagination
  length: number;
  pageSize = 100;
  pageIndex = 1;
  pageSizeOptions: number[] = [ 2];


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.data = this.userService.getUser();
    this.data.subscribe(data => {
        this.setPagination(10, 1, 2);
        this.dataSource = new UserDataSource(data);
    });
  }

  setPagination(length, startIndex, pageSize) {
    this.length = length;
    this.pageIndex = startIndex;
    this.pageSize = pageSize;
}

onPaginateChange(event) {
  this.pageIndex = event.pageIndex;
  this.pageSize = event.pageSize;
  this.loadData();
}

}
export class UserDataSource extends DataSource<any> {
  constructor(private _users: User[]) {
    super();
  }
  connect(): Observable<User[]> {
    return Observable.of(this._users);
  }
  disconnect() {}
}
