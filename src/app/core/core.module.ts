import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesService } from './pages.service';
import { WidgetsService } from './widgets.service';
import { LoginService } from './login.service';
import { CognitoService } from './cognito.service';
import { ChangePasswordService } from './change-password.service';
import { UserProfileService } from './user-profile.service';
import { S3Service } from './s3.service';
import { StaticFilesService } from './static-files.service';
import { AwsCredentialsService } from './aws-credentials.service';
import { MenuService } from './menu.service';
import { PageTemplatesService } from './page-templates.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers: [
		PagesService,
		WidgetsService,
		LoginService,
		CognitoService,
		ChangePasswordService,
		UserProfileService,
		S3Service,
		StaticFilesService,
		AwsCredentialsService,
		MenuService,
		PageTemplatesService,
	]
})
export class CoreModule { }
