
```
get color (): string { return this.error ? 'warn' : 'primary' }

```
```this.snackbar.open(
'You will be redirected, or click...\nAllow your browser to always redirect for this URL to avoid in the future. ',
'GO!',
{ duration: 2500 }).afterDismissed().subscribe(() => {
console.log( '!!!!!!!!!!!!!!!!!!!!!!!!  Returning user  !!!!!!!!!!!!!!!!!!!!!!!!' );
window.location.replace( returnService )	// window.open( returnService ,'_blank', '' )	// window.location.href = returnService
})
```


```

	submitted	= false;
	privacyPolicyUrl:				string;
	messageOnAuthSuccess:			string;
	resetPasswordErrorRequiredText	= 'E-mail is required to reset the password!';
	signInTabText					= 'Sign in';
	signInCardTitleText				= 'Signing in';
	loginButtonText					= 'Log In';
	forgotPasswordButtonText		= 'Forgot Password ?';
	nameErrorRequiredText			= 'Name is required';
	nameErrorMinLengthText			= 'The name is too short!';
	nameErrorMaxLengthText			= 'The name is too long!';
	emailErrorRequiredText			= 'E-mail is required';
	passwordText					= 'Password';
	passwordErrorRequiredText		= 'Password is required';


providers							= AuthProvider | AuthProvider = AuthProvider.ALL;
returnUri							= window.location.origin + '/#/HOWDY5';
providersTheme:						Theme;																			// Classic, Stroked, etc.
tabIndex:							number | null;
goBackURL:							string;
messageOnAuthError:					string;
messageOnEmailConfirmationSuccess:	string;
customValidator:					RegExp;
verifyEmailTemplate:				TemplateRef<any>;																// Verify email template to use in place of default template. See email-confirmation component
verifyEmailTitleText:				string;																			// i18n translations to use in default template for email verification. See email-confirmation component
verifyEmailConfirmationText:		string;
registrationEnabled					= true;
resetPasswordEnabled				= true;
guestEnabled						= true;
enableLengthRule					= true;																			// Password strength api
enableLowerCaseLetterRule			= true;
enableUpperCaseLetterRule			= true;
enableDigitRule						= true;
enableSpecialCharRule				= true;
resetPasswordErrorPatternText		= 'Please enter a valid e-mail address';
resetPasswordActionButtonText		= 'Reset';
resetPasswordInstructionsText		= 'Reset requested. Check your e-mail instructions.';
passwordErrorMinLengthText			= 'The password is too short!';
passwordErrorMaxLengthText			= 'The password is too long!';
registerTabText						= 'Register';																	// Register Tab
guestButtonText						= 'continue as guest';
emailConfirmationTitle				= 'Confirm your e-mail address!';												// email confirmation component
public	route:		ActivatedRoute,
this.returnUri	= this.route.snapshot.paramMap.get( 'returnUri' ) || '/HOWDY4'


usePopup: boolean;
loggedIn	= false;
onTabChange	( event: MatTabChangeEvent ) { console.log( 'on tab change: ', event )}
get access_token_expiration	() 			{ return this.fireAuth								}
get givenName				() 			{ return this.fireAuth								}
get lf						() 			{ return this.loginForm.controls					}
get requestAccessToken		() 			{ return this.fireAuth								}
get useHashLocationStrategy	() 			{ return this.fireAuth								}
onAccountDeleted			(): void	{ console.log( 'Account Delete successful!'			)}
createAccount				(): void	{ console.log( 'create account has been requested'	)}
get access_token			() 			{ return this.fireAuth								}
get familyName				() 			{ return this.fireAuth								}
get id_token				() 			{ return this.fireAuth								}
get id_token_expiration		() 			{ return this.fireAuth								}
successCallback	( signInSuccessData: FirebaseUISignInSuccessWithAuthResult )	{ if(this.env.debug) console.log('>>>LoginComponent->successCallback->SUCCESS:',signInSuccessData	)}
errorCallback	( errorData: FirebaseUISignInFailure )							{ if(this.env.debug) console.log('>>>LoginComponent->successCallback->ERROR:',errorData				)}
private firebaseuiAngularLibraryService: FirebaseuiAngularLibraryService
this.firebaseuiAngularLibraryService.firebaseUiInstance.disableAutoSignIn();										// Force off automatic signin
```
