import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedNavComponent } from './med-nav.component';

describe('MedNavComponent', () => {
  let component: MedNavComponent;
  let fixture: ComponentFixture<MedNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
