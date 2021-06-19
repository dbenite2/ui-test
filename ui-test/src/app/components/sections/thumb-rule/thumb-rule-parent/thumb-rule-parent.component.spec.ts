import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbRuleParentComponent } from './thumb-rule-parent.component';

describe('ThumbRuleParentComponent', () => {
  let component: ThumbRuleParentComponent;
  let fixture: ComponentFixture<ThumbRuleParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbRuleParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbRuleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
