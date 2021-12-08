import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TaskService } from './task/services/task.service';
import { EffectsModule } from '@ngrx/effects';
import { TaskModule } from './task/task.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskResolver } from './task/task.resolver';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'tasks',
    component: TaskListComponent,
    resolve:  {
      tasks: TaskResolver
    }
  },
  {path: 'create-task', component: CreateTaskComponent},
  {path: '**', redirectTo: 'tasks'}
]

@NgModule({
  declarations: [AppComponent, MainScreenComponent ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    TaskModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(routes),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [TaskResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
