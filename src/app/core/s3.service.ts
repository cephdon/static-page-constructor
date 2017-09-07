import * as AWS from "aws-sdk/global";
import * as S3 from "aws-sdk/clients/s3";

import { Injectable, NgZone } from '@angular/core';

import { CognitoService } from './cognito.service';
import { AwsCredentialsService } from './aws-credentials.service';

import { environment } from "../../environments/environment";

@Injectable()
export class S3Service {

	constructor(private cognitoService: CognitoService,
				private awsCredentialsService: AwsCredentialsService) { 
		AWS.config.region = environment.region;
	}

	private getS3(): any {
		AWS.config.update({
			region: environment.region,
		});

		const clientParams: any = {
			region: environment.region,
			apiVersion: '2006-03-01',
			params: {
				Bucket: environment.staticFilesBucket
			}
		};

		if (environment.s3Endpoint) {
			clientParams.endpoint = environment.s3Endpoint;
		}

		var s3 = new S3(clientParams);

		return s3;
	}

	public listStaticFiles(): Promise<any> {
		return this.cognitoService.getIdToken().then((token) => {
			return this.awsCredentialsService.init(token).then(() => {
				return this.getS3().listObjectsV2({
					Prefix: environment.staticFilesKeyPrefix + '/' 
				}).promise();
			});
		});
	}

	public upload(file): Promise<any> {
		return this.getS3().upload({
			Key: `${environment.staticFilesKeyPrefix}/${file.name}`,
			ContentType: file.type,
			Body: file
		}).promise();
	}
}
