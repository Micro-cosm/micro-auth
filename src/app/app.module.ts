

import {	environment				} from '../environments/environment';
import {	AngularFireModule		} from '@angular/fire';
import {	BrowserModule			} from '@angular/platform-browser';
import {	BrowserAnimationsModule	} from '@angular/platform-browser/animations';
import {	CdkTableModule			} from '@angular/cdk/table';
import {	CdkTreeModule			} from '@angular/cdk/tree';
import {	DragDropModule			} from '@angular/cdk/drag-drop';
import {	FlexLayoutModule		} from '@angular/flex-layout';
import {	HttpClientModule		} from '@angular/common/http';
import {	NgModule				} from '@angular/core';
import {	ScrollingModule			} from '@angular/cdk/scrolling';
import {	Title					} from '@angular/platform-browser';
import {	NgxAuthFirebaseUIModule	} from 'ngx-auth-firebaseui';
import {	AppRoutingModule		} from './app-routing.module';
import {	GraphQLModule			} from './sub-modules/graphql.module';
import {	MaterialModule			} from './sub-modules/material.module';
import {	AppComponent			} from './app.component';
import {	DevHeadComponent		} from './dev-head/dev-head.component';
import {	FooterComponent			} from './footer/footer.component';
import {	HomeComponent			} from './home/home.component';
import {	LoginComponent			} from './login/login.component';
import {	MobileFooterComponent	} from './mobile-footer/mobile-footer.component';
import {	NavComponent			} from './nav/nav.component';
import {	RegisterComponent		} from './register/register.component';
import {	NavPipe					} from './_pipes/nav.pipe';
import {	SafePipe				} from './_pipes/safe.pipe';
// import {	InMemoryCache			} from '@apollo/client/core';
// import {	APOLLO_OPTIONS			} from 'apollo-angular';
// import {	HttpLink				} from 'apollo-angular/http';
// import {	HTTP_INTERCEPTORS		} from '@angular/common/http';

import 'hammerjs';

export function firebaseAppNameFactory() { return `weja-us` }

@NgModule({
	declarations: [
		AppComponent,
		DevHeadComponent,
		FooterComponent,
		HomeComponent,
		LoginComponent,
		MobileFooterComponent,
		NavComponent,
		NavPipe,
		RegisterComponent,
		SafePipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
		AngularFireModule.initializeApp( environment.firebase.creds ),
		NgxAuthFirebaseUIModule.forRoot( environment.firebase.creds, firebaseAppNameFactory, environment.firebase.configs ),
		FlexLayoutModule,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule,
		GraphQLModule,
		ScrollingModule
	],
	providers: [
		{ provide: 'googleTagManagerId',	useValue: environment.google.analytics.trackingCode },
		Title
// 		{ provide: APOLLO_OPTIONS, useFactory: ( httpLink: HttpLink ) => { return { cache: new InMemoryCache(), link: httpLink.create({ uri: 'https://48p1r2roz4.sse.codesandbox.io' })}}, deps: [ HttpLink ]},
	],
	bootstrap: [ AppComponent	]
})

export class AppModule {}
