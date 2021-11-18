import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongressMemberDetailComponent } from './congress-member-detail.component';

describe('CongressMemberDetailComponent', () => {
  let component: CongressMemberDetailComponent;
  let fixture: ComponentFixture<CongressMemberDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongressMemberDetailComponent ]
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
