import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const heroesRoutes: Routes = [
  { path: "heroes", component: HeroesComponent, data: { animation: "heroes" } },
  {
    path: "details/:id",
    component: HeroDetailComponent,
    data: { animation: "hero" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
