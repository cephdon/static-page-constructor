import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';

import { SharedModule } from './../shared/shared.module';
import { SetPasswordComponent } from './set-password/set-password.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
	imports: [
		CommonModule,
		UsersRoutingModule,
		SharedModule
	],
	declarations: [LoginComponent, SetPasswordComponent, LogoutComponent, ResetPasswordComponent],
	providers: []
})
export class UsersModule { }
