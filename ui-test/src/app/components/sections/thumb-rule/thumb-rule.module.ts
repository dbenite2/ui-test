import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThumbCardComponent } from './shared/thumb-card/thumb-card.component';
import { ThumbDropdownComponent } from './shared/thumb-dropdown/thumb-dropdown.component';

const components = [
  ThumbCardComponent
];

@NgModule({
  declarations: [
    ...components,
    ThumbDropdownComponent
  ],
  exports: [
    ThumbCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThumbRuleModule { }