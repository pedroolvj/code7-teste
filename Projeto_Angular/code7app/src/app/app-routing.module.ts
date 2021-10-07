import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { GridTestComponent } from './grid-test/grid-test.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'grid',
    component: GridTestComponent,
  },
  {
    path: 'films',
    component: FilmListComponent,
  },
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
