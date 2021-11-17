import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CongressListComponent} from './congress-list/congress-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'congress-members', pathMatch: 'full'},
  {path: 'congress-members', component: CongressListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

