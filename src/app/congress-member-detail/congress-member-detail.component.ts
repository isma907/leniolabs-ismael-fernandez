import {Component, OnInit} from '@angular/core';
import {CongressService} from "../shared/services/congress.service";
import {ActivatedRoute} from "@angular/router";
import {finalize, take} from "rxjs";
import {ICongressMember, ICongressMemberDetail} from "../shared/interfaces/congress.interface";

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

  memberDetail: ICongressMemberDetail
  loading: boolean = false

  ngOnInit(): void {
    this.getMemberDetail();
  }

  getMemberDetail() {
    const memberId = this.route.snapshot.paramMap.get('id') ?? '';
    this.loading = true
    this.congressService.getCongressMember(memberId)
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false
        })
      ).subscribe(
      (res: ICongressMemberDetail) => {
        this.memberDetail = res
      },
      error => {
      })
  }
}
