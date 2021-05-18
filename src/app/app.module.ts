import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // <-- NgModel lives here
import { AppRoutingModule } from "./app-routing.module";
import { HeroesRoutingModule } from "./heros-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroService } from "./hero.service";
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { PowerBoosterComponent } from "./pipe/power-booster/power-booster.component";
import { MessageService } from "./message.service";
import { InMemoryDataService } from "./in-memory-data.service";
import { exponentialStrength } from "./pipe/expoenetial-strenght.pipe";
import { ProfileFormComponent } from "./profile-form/profile-form.component";
import { PageNotfoundComponent } from "./page-notfound/page-notfound.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    PowerBoosterComponent,
    PageNotfoundComponent,

    // custom pipe
    exponentialStrength,

    ProfileFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    HeroesRoutingModule, // in order of imports
    AppRoutingModule,

    BrowserAnimationsModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
