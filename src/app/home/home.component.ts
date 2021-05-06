

import { environment		} from '../../environments/environment';
import { HttpClient			} from "@angular/common/http";
import { Component			} from '@angular/core';
import { Input				} from '@angular/core';
import { OnInit				} from '@angular/core';
import { ActivatedRoute		} from '@angular/router';
import { AngularFireAuth	} from '@angular/fire/auth';
import { Router				} from '@angular/router';
import { Theme				} from 'ngx-auth-firebaseui';

import IdTokenResult = firebase.auth.IdTokenResult;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.sass' ]
})

export class HomeComponent implements OnInit {
	env:	any;
	error:	boolean;
	login:	false;
	index:	number;
	
	loggedIn	= false;
	themes		= Theme;
	title		= 'Authentication Demo';
	
	@Input() apiReply: {};
	
	constructor (
		public	router:		Router,
		private route:		ActivatedRoute,
		private fireAuth:	AngularFireAuth,
		private http:		HttpClient
	) { this.env = environment }
	
	
	ngOnInit (): void	{
		this.fireAuth.authState.subscribe(auth => {
			if ( this.env.debug ) console.log( '>> HomeComponent -> authState change:', auth );
			this.loggedIn = !auth === null;
			
			auth.getIdTokenResult().then(( idTokenResult: IdTokenResult ) => {
				if ( this.env.debug ) console.log( ">> HomeComponent -> Local token result:", idTokenResult );
				
				const dest		= this.env.server.auth.service;
				const headers	= { 'Authorization': 'Bearer ' + idTokenResult.token };
				
				this.http.get<any>(dest, { headers }).subscribe(data => {
					if ( this.env.debug ) console.log( "\nRetrieving:", dest, "\nResult:", data );
					data.idTokenResult	= idTokenResult;
					this.apiReply		= data;
				})
				
			})
		}
	)}

	logout(): void { this.fireAuth.signOut().then( r => console.log( '>> HomeComponent -> logged out:', r ))}
	onSignOut(): void { console.log( 'Sign-out successful!'			)}
	onAccountDeleted(): void { console.log( 'Account Delete successful!'	)}
}
