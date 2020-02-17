import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UserListDataSource } from './user-list-datasource';
import { User } from '../../core/models/user.model';
import { UserApiService } from 'src/app/core/services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<User>;
  dataSource: UserListDataSource;
  userService: UserApiService;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['userID', 'name', 'userName', 'email', 'phone', 'edit','delete'];
  constructor(private usersService: UserApiService,
              private router: Router) {
    this.userService = usersService;

  }
  ngOnInit() {
    this.dataSource = new UserListDataSource(this.userService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteUser(userID: any): void {
    this.userService.delete(userID).subscribe(success => {
     this.dataSource = new UserListDataSource(this.userService);
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     this.table.dataSource = this.dataSource;
    })
  }
}
