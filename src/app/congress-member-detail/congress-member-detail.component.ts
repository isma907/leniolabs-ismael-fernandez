import {Component, OnInit} from '@angular/core';
import {CongressService} from "../shared/services/congress.service";
import {ActivatedRoute} from "@angular/router";
import {finalize, take} from "rxjs";

@Component({
  selector: 'lenio-congress-member-detail',
  templateUrl: './congress-member-detail.component.html',
  styleUrls: ['./congress-member-detail.component.scss']
})
export class CongressMemberDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private congressService: CongressService,
  ) {
  }

  memberDetail: any

  ngOnInit(): void {
    this.getMemberDetail();
  }

  getMemberDetail() {
    debugger
    const memberId = this.route.snapshot.paramMap.get('id') ?? '';

    this.congressService.getCongressMember(memberId)
      .pipe(
        take(1),
        finalize(() => {
        })
      ).subscribe(
      (res) => {
        debugger
        this.memberDetail = res
      },
      error => {
      })
  }
}
