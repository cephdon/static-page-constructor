import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		UsersRoutingModule,
		SharedModule
	],
	declarations: [LoginComponent],
	providers: []
})
export class UsersModule { }
