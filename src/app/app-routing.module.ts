import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';
import { ExplorerComponent } from './views/explorer/explorer.component';

const routes: Routes = [
  {
    path: '',
    component: ExplorerComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
