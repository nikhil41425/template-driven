import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {path:"tdf",component:TdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
