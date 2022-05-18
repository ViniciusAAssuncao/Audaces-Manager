import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionsComponent } from './components/collections/collections.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCollectionsComponent } from './components/create-collections/create-collections.component';
import { EditComponent } from './components/edit/edit.component';
import { ModelsComponent } from './components/models/models.component';
import { CreateModelsComponent } from './components/create-models/create-models.component';
import { EditModelsComponent } from './components/edit-models/edit-models.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomeComponent,
    MenuComponent,
    CollectionsComponent,
    CreateCollectionsComponent,
    EditComponent,
    ModelsComponent,
    CreateModelsComponent,
    EditModelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
