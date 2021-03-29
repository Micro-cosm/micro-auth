

import { environment		} from "../environments/environment";
import { NgModule			} from '@angular/core';
import { Routes				} from '@angular/router';
import { RouterModule		} from '@angular/router';
import { LoginComponent		} from './login/login.component';
import { RegisterComponent	} from './register/register.component';
import { HomeComponent		} from './home/home.component';
import { AuthGuard			} from './_guards/auth.guard';
// import { LoggedInGuard	} from 'ngx-auth-firebaseui';			// UNCOMMENT THIS WHEN USING AND PROVIDE TO 'canActivate' WHEN USING ngx-auth-firebaseui local behavior

const routes: Routes = [
	{ path: '',		redirectTo: 'login', pathMatch: 'full'			},
	{ path: 'login',				component: LoginComponent		},
	{ path: 'login/:returnService',	component: LoginComponent		},
	{ path: 'register',				component: RegisterComponent	},
	{ path: 'home',					component: HomeComponent,	canActivate: [AuthGuard]},
	{ path: '**',	redirectTo: 'login' }
];

@NgModule({
	imports: [ RouterModule.forRoot( routes, { enableTracing: false, useHash: true })],							// { initialNavigation: 'enabled' }  // support for SSR
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
