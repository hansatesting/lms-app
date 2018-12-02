import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDvdsComponent } from './all-dvds.component';

describe('AllDvdsComponent', () => {
  let component: AllDvdsComponent;
  let fixture: ComponentFixture<AllDvdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDvdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDvdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
