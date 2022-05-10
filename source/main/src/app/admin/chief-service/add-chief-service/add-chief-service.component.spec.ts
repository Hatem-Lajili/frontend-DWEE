import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChiefServiceComponent } from './add-chief-service.component';

describe('AddChiefServiceComponent', () => {
  let component: AddChiefServiceComponent;
  let fixture: ComponentFixture<AddChiefServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChiefServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChiefServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
