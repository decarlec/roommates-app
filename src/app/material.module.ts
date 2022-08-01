import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule, BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule, BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatToolbarModule, MatIconModule],
})

export class MaterialModule { }
