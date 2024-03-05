import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { Exercise1BindingComponent } from './exercise1-binding/exercise1-binding.component';
import { PageClipComponent } from './page-clip/page-clip.component';
import { PageEllipsisComponent } from './page-ellipsis/page-ellipsis.component';
import { TextOverflowComponent } from './text-overflow/text-overflow.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    Exercise1BindingComponent,
    PageClipComponent,
    PageEllipsisComponent,
    TextOverflowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
