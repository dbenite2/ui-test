import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ThumbCardComponent } from './shared/thumb-card/thumb-card.component';
import { ThumbDropdownComponent } from './shared/thumb-dropdown/thumb-dropdown.component';

const components = [
  ThumbCardComponent,
  ThumbDropdownComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ThumbCardComponent,
    ThumbDropdownComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class ThumbRuleModule {
}
