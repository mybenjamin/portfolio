import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), data: { animation: 'profile' } },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule), data: { animation: 'contact' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
