import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';

import { SharedModule } from './../shared/shared.module';
import { SetPasswordComponent } from './set-password/set-password.component';

@NgModule({
	imports: [
		CommonModule,
		UsersRoutingModule,
		SharedModule
	],
	declarations: [LoginComponent, SetPasswordComponent],
	providers: []
})
export class UsersModule { }
