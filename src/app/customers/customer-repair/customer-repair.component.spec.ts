import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRepairComponent } from './customer-repair.component';

describe('CustomerRepairComponent', () => {
  let component: CustomerRepairComponent;
  let fixture: ComponentFixture<CustomerRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
