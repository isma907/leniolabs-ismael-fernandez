import {Component, OnInit} from '@angular/core';
import {CongressService} from "../shared/services/congress.service";
import {MatTableDataSource} from "@angular/material/table";
import {ICongressMember} from "../shared/interfaces/congress.interface";
import {finalize, take} from "rxjs";
import {IFilterInterface} from "../shared/interfaces/filter.interface";
import {EFilterFields} from "../shared/enum/filter-fields.enum";
import {AdvancedFilterPipe} from "../shared/pipes/advanced-filter.pipe";

@Component({
  selector: 'lenio-congress-list',
  templateUrl: './congress-list.component.html',
  styleUrls: ['./congress-list.component.scss']
})

export class CongressListComponent implements OnInit {

  constructor(
    private congressService: CongressService,
    private advancedFilterPipe: AdvancedFilterPipe
  ) {
  }

  filterValues: any = {
    [EFilterFields.first_name]: '',
    [EFilterFields.last_name]: '',
    [EFilterFields.state]: ''
  };

  advancedFilterFields: IFilterInterface[] = [
    {
      label: 'First Name',
      colName: EFilterFields.first_name,
    },
    {
      label: 'Last Name',
      colName: EFilterFields.last_name,
    },
    {
      label: 'State',
      colName: EFilterFields.state
    },
    {
      label: 'State',
      colName: EFilterFields.state
    }
  ]

  FILTER_FIELDS = EFilterFields;
  displayedColumns: string[] = [EFilterFields.first_name, EFilterFields.party, EFilterFields.gender, EFilterFields.state, 'actions'];
  congressList: ICongressMember[] = [];
  dataSource = new MatTableDataSource<ICongressMember>([]);
  singleFilter: string;

  ngOnInit() {
    this.fetchMembers();
  }

  fetchMembers() {
    this.congressService.getCongressList()
      .pipe(
        take(1),
        finalize(() => {})
      ).subscribe(
      (members: ICongressMember[]) => {
        this.congressList = members;
        this.dataSource.data = members;
      },
      (err) => {
      },
    );
  }


  applySingleInputSearch(event: Event) {
    this.resetAdvancedFilter();
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.data = this.congressList;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  advancedFilterChange(colName: string, event: Event) {
    let filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase()
    this.filterValues[colName] = filterValue ? filterValue.toLowerCase() : ''
    const filterData = JSON.stringify(this.filterValues);
    this.dataSource.filter = '';
    this.dataSource.data = this.advancedFilterPipe.transform(this.congressList.slice(), filterData);
  }

  resetAdvancedFilter() {
    this.advancedFilterFields.forEach((value, key) => {
      value.filterVal = '';
    })
    this.dataSource.filter = ""
  }
}
