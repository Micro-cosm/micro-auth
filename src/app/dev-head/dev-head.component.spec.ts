

import {	async,
			ComponentFixture,
			TestBed				} from '@angular/core/testing';
import {	DevheadComponent	} from '@app/dev-head/dev-head.component';


describe ('DevheadComponent', () => {
	
	let component:	DevheadComponent;
	let fixture:	ComponentFixture<DevheadComponent>;
	
	beforeEach ( async (() => {
		TestBed.configureTestingModule ({
			declarations: [
				DevheadComponent
			]
		}).compileComponents ()
	}));
	
	beforeEach (() => {
		fixture		= TestBed.createComponent ( DevheadComponent );
		component	= fixture.componentInstance;
		fixture.detectChanges ()
	});
	
// 	it ('should create', () => { expect ( component ).toBeTruthy ()})
});
