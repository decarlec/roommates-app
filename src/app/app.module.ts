import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TaskModule } from './task/task.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TaskService } from './services/taskservice';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './task/store/effect/task.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    TaskModule,
    BrowserAnimationsModule,
    MaterialModule,
    EffectsModule.forRoot([TaskEffects])
  ],
  providers: [ TaskService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
