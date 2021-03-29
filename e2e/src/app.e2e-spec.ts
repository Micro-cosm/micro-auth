


import {	AppPage	} from './app.po';
import {	browser,
			logging	} from 'protractor';

describe('workspace-project App', () => {
	
	let page: AppPage;
	
	beforeEach(() => { page = new AppPage() });
	
	it('should display welcome message', () => {
		page.navigateTo();
		expect( page.getTitleText() ).toEqual('auth-firebase-firebaseui app is running!' )
	});
	
	afterEach(async () => {
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);											// Assert that there are no errors emitted from the browser
		expect( logs ).not.toContain( jasmine.objectContaining({ level: logging.Level.SEVERE } as logging.Entry))
	})
})
