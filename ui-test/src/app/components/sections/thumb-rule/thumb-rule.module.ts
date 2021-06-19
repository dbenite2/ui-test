import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { ThumbCardComponent } from './shared/thumb-card/thumb-card.component';
import { ThumbDropdownComponent } from './shared/thumb-dropdown/thumb-dropdown.component';
import { EffectsModule } from '@ngrx/effects';
import { ThumbsRuleEffect } from './store/effects/thumbs-rule.effect';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../../environments/environment.prod';

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
export class ThumbRuleModule { }
