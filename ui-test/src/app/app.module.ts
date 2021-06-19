import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbRuleParentComponent } from './components/sections/thumb-rule/thumb-rule-parent/thumb-rule-parent.component';
import { ThumbRuleModule } from './components/sections/thumb-rule/thumb-rule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ThumbRuleParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThumbRuleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
