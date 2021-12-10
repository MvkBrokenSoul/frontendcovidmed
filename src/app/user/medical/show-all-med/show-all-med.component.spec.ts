import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllMedComponent } from './show-all-med.component';

describe('ShowAllMedComponent', () => {
  let component: ShowAllMedComponent;
  let fixture: ComponentFixture<ShowAllMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
