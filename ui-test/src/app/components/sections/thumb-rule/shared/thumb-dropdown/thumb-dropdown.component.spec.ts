import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThumbDropdownComponent } from './thumb-dropdown.component';

describe('ThumbDropdownComponent', () => {
  let component: ThumbDropdownComponent;
  let fixture: ComponentFixture<ThumbDropdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
