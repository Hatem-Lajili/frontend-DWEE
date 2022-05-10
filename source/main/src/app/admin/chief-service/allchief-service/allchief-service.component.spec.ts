import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllchiefServiceComponent } from './allchief-service.component';

describe('AllchiefServiceComponent', () => {
  let component: AllchiefServiceComponent;
  let fixture: ComponentFixture<AllchiefServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllchiefServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllchiefServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
