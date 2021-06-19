import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThumbCardComponent } from './shared/thumb-card/thumb-card.component';

const components = [
  ThumbCardComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ThumbCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThumbRuleModule { }
