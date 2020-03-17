import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./book/home/home.component";
import {ReadListComponent} from "./book/read-list/read-list.component";
import {ReadingListComponent} from "./book/reading-list/reading-list.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'read', component: ReadListComponent},
  {path: 'reading', component: ReadingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
