import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraComponent } from './components/extra/extra.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'posts/:id', component: ExtraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
