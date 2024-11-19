import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [{ path: '', component: ProductListComponent }];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, HttpClientModule, CommonModule),
  ],
};
