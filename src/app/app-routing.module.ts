import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { CuriosityComponent } from './components/pages/curiosity/curiosity.component';
import { OpportunityComponent } from './components/pages/opportunity/opportunity.component';
import { SpiritComponent } from './components/pages/spirit/spirit.component';

const routes: Routes = [
  {path: "curiosity", component: CuriosityComponent},
  {path: "opportunity", component: OpportunityComponent},
  {path: "spirit", component: SpiritComponent},
  {path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[HomeComponent, CuriosityComponent, OpportunityComponent, SpiritComponent]
