import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import {HeroesComponent} from './heroes/heroes.component';  <-- delete
import { DashboardComponent } from "./dashboard/dashboard.component";
// import {HeroDetailComponent} from './hero-detail/hero-detail.component'; <-- delete
import { PageNotfoundComponent } from "./page-notfound/page-notfound.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  // {path:'heroes',component:HeroesComponent},   // delete because the routes in heroes routing module
  // {path:'details/:id',component:HeroDetailComponent},
  { path: "**", component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
