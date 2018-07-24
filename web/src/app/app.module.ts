import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SpacesComponent } from './spaces/spaces.component';
import { SpaceDetailComponent } from './space-detail/space-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacesComponent,
    SpaceDetailComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
