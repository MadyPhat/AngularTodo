import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenDashboardComponent } from './driven-dashboard.component';

describe('DrivenDashboardComponent', () => {
  let component: DrivenDashboardComponent;
  let fixture: ComponentFixture<DrivenDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivenDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
