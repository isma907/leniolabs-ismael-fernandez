import {Component, OnInit} from '@angular/core';
import {CongressService} from "../shared/services/congress.service";
import {MatTableDataSource} from "@angular/material/table";
import {ICongressMember} from "../shared/interfaces/congress.interface";
import {finalize, take} from "rxjs";

@Component({
  selector: 'lenio-congress-list',
  templateUrl: './congress-list.component.html',
  styleUrls: ['./congress-list.component.scss']
})

export class CongressListComponent implements OnInit {

  constructor(
    private congressService: CongressService
  ) {
  }

  displayedColumns: string[] = ['first_name', 'party', 'gender', 'actions'];
  dataSource = new MatTableDataSource<ICongressMember>([]);

  ngOnInit() {
    this.fetchMembers();
  }

  fetchMembers() {
    this.congressService.getCongressList()
      .pipe(
        take(1),
        finalize(() => {
        })
      )
      .subscribe(
        (members: ICongressMember[]) => {
          this.dataSource.data = members;
          this.dataSource.sort
        },
        (err) => {
        },
      );
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
