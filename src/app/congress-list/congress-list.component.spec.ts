import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CongressListComponent} from './congress-list.component';
import {CongressService} from "../shared/services/congress.service";
import {HttpClientModule} from "@angular/common/http";
import {AdvancedFilterPipe} from "../shared/pipes/advanced-filter.pipe";

describe('CongressListComponent', () => {
  let component: CongressListComponent;
  let fixture: ComponentFixture<CongressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CongressListComponent],
      providers: [CongressService, AdvancedFilterPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
