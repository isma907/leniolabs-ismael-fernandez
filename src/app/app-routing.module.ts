import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CongressListComponent} from './congress-list/congress-list.component';
import {CongressMemberDetailComponent} from "./congress-member-detail/congress-member-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'congress-members', pathMatch: 'full'},
  {path: 'congress-members', component: CongressListComponent},
  {path: 'congress-member/:id', component: CongressMemberDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

