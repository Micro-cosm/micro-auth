

// import {	FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult	} from 'firebaseui-angular';

import {	environment								} from '../../environments/environment';
import {	Component,
			OnInit									} from '@angular/core';
import {	Router,
			ActivatedRoute							} from '@angular/router';
import {	FormBuilder,
			FormGroup								} from '@angular/forms';
import {	AngularFireAuth							} from '@angular/fire/auth';
import {	User									} from '../_models/user';


@Component({
	selector:		'app-register',
	templateUrl:	'./register.component.html',
	styleUrls:	[	'./register.component.sass'		]
})

export class RegisterComponent implements OnInit {
	
	env:			any;
	controls:		any;
	error:			boolean;
	index:			number;
	loginForm:		FormGroup;
	userProfile:	User;
	
	isLoggedIn	= false;
	submitted	= false;
	
	// loading		= false;
	// returnUri	= window.location.origin + '/#/HOWDY2';


	constructor (
		public	fireAuth:	AngularFireAuth,
		public	builder:	FormBuilder,
		public	route:		ActivatedRoute,
		public	router:		Router
	) {
		this.env = environment
	}
	
	ngOnInit() {
		this.fireAuth.authState.subscribe(auth => {
			console.log( '>>RegisterComponent -> authState -> changed to:', auth );
			if ( auth === null ) {
				this.isLoggedIn 				= false
			} else {
				this.isLoggedIn					= true;
				this.userProfile				= auth.providerData[ 0 ];
				this.userProfile.emailVerified	= auth.emailVerified
			}
		})
		// this.returnUri	= this.route.snapshot.paramMap.get( 'returnUri' ) || '/HOWDY3'
	}
	
	onSuccess	( event ) { console.log( event )}
	onError		( event ) { console.log( event )}
	logout		() 			{ this.fireAuth.signOut().then( r => console.log( '>> RegisterComponent -> signOut:', r ))	}
	get lf		() 			{ return this.loginForm.controls 															}
	get color	(): string	{ return this.error ? 'warn' : 'primary'													}
}
