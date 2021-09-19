import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDashboardComponent } from './reactive-dashboard.component';

describe('ReactiveDashboardComponent', () => {
  let component: ReactiveDashboardComponent;
  let fixture: ComponentFixture<ReactiveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
