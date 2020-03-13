import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Contact Components
import { ContactComponent } from './contact.component';


const routes: Routes = [
  { path: '', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
  static components = [ContactComponent];
}
