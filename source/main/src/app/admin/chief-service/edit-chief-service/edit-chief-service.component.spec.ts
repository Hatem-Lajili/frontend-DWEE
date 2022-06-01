import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChiefServiceComponent } from './edit-chief-service.component';

describe('EditChiefServiceComponent', () => {
  let component: EditChiefServiceComponent;
  let fixture: ComponentFixture<EditChiefServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChiefServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChiefServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
