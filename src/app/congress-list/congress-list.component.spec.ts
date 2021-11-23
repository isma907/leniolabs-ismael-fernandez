import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {CongressListComponent} from './congress-list.component';
import {CongressService} from "../shared/services/congress.service";
import {AdvancedFilterPipe} from "../shared/pipes/advanced-filter.pipe";
import {ICongressMember} from "../shared/interfaces/congress.interface";
import {BrowserModule, By} from "@angular/platform-browser";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "../ui-module/header/header.component";
import {FooterComponent} from "../ui-module/footer/footer.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {XhrInterceptor} from "../shared/interceptors/xhr.interceptor";
import {Observable, of} from "rxjs";
import {UiModuleModule} from "../ui-module/ui-module.module";

const congressList: ICongressMember[] = [
  {
    "id": "A000031",
    "title": "Senator, 3rd Class",
    "short_title": "Sen.",
    "api_uri": "https://api.propublica.org/congress/v1/members/A000031.json",
    "first_name": "Brockman",
    "middle_name": null,
    "last_name": "Adams",
    "suffix": null,
    "date_of_birth": "1927-01-13",
    "gender": null,
    "party": "D",
    "leadership_role": null,
    "twitter_account": null,
    "facebook_account": null,
    "youtube_account": null,
    "govtrack_id": "400692",
    "cspan_id": null,
    "votesmart_id": null,
    "icpsr_id": "10700",
    "crp_id": null,
    "google_entity_id": null,
    "fec_candidate_id": "",
    "url": "",
    "rss_url": null,
    "contact_form": null,
    "in_office": false,
    "cook_pvi": null,
    "dw_nominate": null,
    "ideal_point": null,
    "seniority": "5",

    "total_votes": 550,
    "missed_votes": 3,
    "total_present": 1,
    "last_updated": "2019-10-07 09:33:31 -0400",
    "ocd_id": "ocd-division/country:us/state:wa",
    "office": null,
    "phone": null,
    "fax": null,
    "state": "WA",
    "senate_class": "3",
    "state_rank": "",
    "lis_id": "S180"
    , "missed_votes_pct": 0.55,
    "votes_with_party_pct": 91.96,
    "votes_against_party_pct": 8.04
  },
  {
    "id": "A000069",
    "title": "Senator, 1st Class",
    "short_title": "Sen.",
    "api_uri": "https://api.propublica.org/congress/v1/members/A000069.json",
    "first_name": "Daniel",
    "middle_name": "K.",
    "last_name": "Akaka",
    "suffix": null,
    "date_of_birth": "1924-09-11",
    "gender": "M",
    "party": "D",
    "leadership_role": null,
    "twitter_account": "SenatorAkaka",
    "facebook_account": null,
    "youtube_account": "senatorakaka",
    "govtrack_id": "300001",
    "cspan_id": "8704",
    "votesmart_id": null,
    "icpsr_id": "14400",
    "crp_id": null,
    "google_entity_id": "/m/01rbrq",
    "fec_candidate_id": "",
    "url": "",
    "rss_url": null,
    "contact_form": null,
    "in_office": false,
    "cook_pvi": null,
    "dw_nominate": null,
    "ideal_point": null,
    "seniority": "3",

    "total_votes": 550,
    "missed_votes": 4,
    "total_present": 0,
    "last_updated": "2019-10-07 09:33:31 -0400",
    "ocd_id": "ocd-division/country:us/state:hi",
    "office": null,
    "phone": null,
    "fax": null,
    "state": "HI",
    "senate_class": "1",
    "state_rank": "",
    "lis_id": "S213"
    , "missed_votes_pct": 0.73,
    "votes_with_party_pct": 90.82,
    "votes_against_party_pct": 9.18
  },
  {
    "id": "B000243",
    "title": "Senator, 2nd Class",
    "short_title": "Sen.",
    "api_uri": "https://api.propublica.org/congress/v1/members/B000243.json",
    "first_name": "Max",
    "middle_name": null,
    "last_name": "Baucus",
    "suffix": null,
    "date_of_birth": "1941-12-11",
    "gender": "M",
    "party": "D",
    "leadership_role": null,
    "twitter_account": null,
    "facebook_account": null,
    "youtube_account": "SenatorBaucus",
    "govtrack_id": "300005",
    "cspan_id": "1727",
    "votesmart_id": null,
    "icpsr_id": "14203",
    "crp_id": null,
    "google_entity_id": "/m/01rcm2",
    "fec_candidate_id": "",
    "url": "http://www.baucus.senate.gov",
    "rss_url": null,
    "contact_form": null,
    "in_office": false,
    "cook_pvi": null,
    "dw_nominate": null,
    "ideal_point": null,
    "seniority": "13",

    "total_votes": 550,
    "missed_votes": 3,
    "total_present": 0,
    "last_updated": "2019-10-07 09:33:31 -0400",
    "ocd_id": "ocd-division/country:us/state:mt",
    "office": null,
    "phone": null,
    "fax": null,
    "state": "MT",
    "senate_class": "2",
    "state_rank": "",
    "lis_id": "S127"
    , "missed_votes_pct": 0.55,
    "votes_with_party_pct": 88.04,
    "votes_against_party_pct": 11.96
  },
]

export class CongressTestService {
  getCongressList(): Observable<ICongressMember[]> {
    return of(congressList
    )
  }
}

describe('CongressListComponent', () => {
  let component: CongressListComponent;
  let fixture: ComponentFixture<CongressListComponent>;
  let congressHttpSpy: jasmine.SpyObj<CongressService>

  beforeEach(async () => {
    congressHttpSpy = jasmine.createSpyObj<CongressService>('CongressService', ['getCongressList'])
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        UiModuleModule
      ],
      declarations: [CongressListComponent],
      providers: [{
        provide: CongressService,
        useClass: CongressTestService
      }, AdvancedFilterPipe, HeaderComponent, FooterComponent, {
        provide: HTTP_INTERCEPTORS,
        useClass: XhrInterceptor,
        multi: true
      },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should test the table ', fakeAsync(() => {
    fixture.detectChanges();
    congressHttpSpy.getCongressList.and.callThrough()
    const selectedUser = congressList[0];
    component.setFilterValue(selectedUser.last_name)
    const rowItems = fixture.debugElement.queryAll(By.css(".single_filter_input"));
    expect(rowItems.length).toEqual(1);

    const nameTableCell = fixture.debugElement.query(By.css('.name_table_cell')).nativeElement;
    expect(nameTableCell.textContent).toContain(selectedUser.last_name);
    expect(nameTableCell.textContent).toContain(selectedUser.first_name);

    const stateTableCell = fixture.debugElement.query(By.css('.state_table_cell')).nativeElement;
    expect(stateTableCell.textContent).toContain(selectedUser.state);
  }))
});



