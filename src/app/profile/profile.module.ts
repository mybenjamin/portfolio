import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Profile Modules
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileRoutingModule.components],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
