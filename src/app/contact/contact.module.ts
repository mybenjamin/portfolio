import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Contact Modules
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContactRoutingModule.components],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
