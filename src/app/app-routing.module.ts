import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { CreateCollectionsComponent } from './components/create-collections/create-collections.component';
import { CreateModelsComponent } from './components/create-models/create-models.component';
import { EditModelsComponent } from './components/edit-models/edit-models.component';
import { EditComponent } from './components/edit/edit.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ModelsComponent } from './components/models/models.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'models', component: ModelsComponent },
  { path: 'create-models', component: CreateModelsComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'create-collection', component: CreateCollectionsComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'edit/model/:id', component: EditModelsComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
