import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemedDetaComponent } from './updatemed-deta.component';

describe('UpdatemedDetaComponent', () => {
  let component: UpdatemedDetaComponent;
  let fixture: ComponentFixture<UpdatemedDetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemedDetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemedDetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
