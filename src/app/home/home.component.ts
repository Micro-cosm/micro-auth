

import {	environment			} from '../../environments/environment';
import {	Component,
			OnInit				} from '@angular/core';
import {	ActivatedRoute		} from '@angular/router';
import {	AngularFireAuth		} from '@angular/fire/auth';
import {	Router				} from '@angular/router';
import {	Theme				} from 'ngx-auth-firebaseui';

@Component({
	selector:		'app-home',
	templateUrl:	'./home.component.html',
	styleUrls:	[	'./home.component.sass' 	]
})

export class HomeComponent implements OnInit {
	env:	any;
	error:	boolean;
	login:	false;
	index:	number;
	
	loggedIn	= false;
	themes		= Theme;
	title		= 'Authentication Demo';
	
	constructor (
		private route:		ActivatedRoute,
		private fireAuth:	AngularFireAuth,
		public	router:		Router
	) {
		this.env = environment
	}
	
	ngOnInit(): void	{
		this.fireAuth.authState.subscribe(auth => {
			console.log( '>> HomeComponent -> authState change:', auth );
			this.loggedIn = ! auth === null
		}
	)}
	
	logout():			void { this.fireAuth.signOut().then( r => console.log( '>> HomeComponent -> logged out:', r ))}
	onSignOut():		void { console.log( 'Sign-out successful!'	)}
	onAccountDeleted():	void { console.log( 'Account Delete successful!' )}
}
