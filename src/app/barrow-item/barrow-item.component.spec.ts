import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrowItemComponent } from './barrow-item.component';

describe('BarrowItemComponent', () => {
  let component: BarrowItemComponent;
  let fixture: ComponentFixture<BarrowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
