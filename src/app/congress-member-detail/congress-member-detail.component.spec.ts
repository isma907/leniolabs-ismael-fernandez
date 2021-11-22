import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CongressMemberDetailComponent} from './congress-member-detail.component';
import {CongressService} from "../shared/services/congress.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

describe('CongressMemberDetailComponent', () => {
  let component: CongressMemberDetailComponent;
  let fixture: ComponentFixture<CongressMemberDetailComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CongressMemberDetailComponent],
      providers: [CongressService,
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return '123';
                },
              },
            },
          },
        }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressMemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
