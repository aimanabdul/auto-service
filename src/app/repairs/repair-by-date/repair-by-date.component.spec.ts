import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairByDateComponent } from './repair-by-date.component';

describe('RepairByDateComponent', () => {
  let component: RepairByDateComponent;
  let fixture: ComponentFixture<RepairByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
