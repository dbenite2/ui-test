import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThumbCardComponent } from './thumb-card.component';

describe('ThumbCardComponent', () => {
  let component: ThumbCardComponent;
  let fixture: ComponentFixture<ThumbCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
