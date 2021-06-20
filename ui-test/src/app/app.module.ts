import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbRuleParentComponent } from './components/sections/thumb-rule/thumb-rule-parent/thumb-rule-parent.component';
import { ThumbRuleModule } from './components/sections/thumb-rule/thumb-rule.module';
import { ThumbsRuleEffect } from './components/sections/thumb-rule/store/effects/thumbs-rule.effect';
import { metaReducers, reducers } from './components/sections/thumb-rule/store';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    ThumbRuleParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThumbRuleModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      ThumbsRuleEffect
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
