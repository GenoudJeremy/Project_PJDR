import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main_component/navbar/navbar.component';
import { HeaderComponent } from './main_component/header/header.component';
import { FooterComponent } from './main_component/footer/footer.component';
import { HomeComponent } from './component/page/home/home.component';
import { ProfilComponent } from './component/page/profil/profil.component';
import { GameComponent } from './component/page/game/game.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfilComponent,
    GameComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      { path: 'profil', component: ProfilComponent},
      { path: 'game', component: GameComponent}]

    ),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
