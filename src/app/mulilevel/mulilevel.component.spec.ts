import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulilevelComponent } from './mulilevel.component';

describe('MulilevelComponent', () => {
  let component: MulilevelComponent;
  let fixture: ComponentFixture<MulilevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulilevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulilevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
