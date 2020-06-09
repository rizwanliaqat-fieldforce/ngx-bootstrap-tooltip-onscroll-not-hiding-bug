import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';



import { DemoTooltipTriggersManualComponent } from './ngx-bootstrap-demo.component'
@NgModule({
  declarations: [DemoTooltipTriggersManualComponent],
  imports: [
    TooltipModule.forRoot(),
    
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  entryComponents: [],
  bootstrap: [DemoTooltipTriggersManualComponent]
})
export class AppModule {
}
