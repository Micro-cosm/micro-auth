

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFooterComponent } from './footer.component';

describe('FooterComponent', () => {
	let component: MobileFooterComponent;
	let fixture: ComponentFixture<MobileFooterComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MobileFooterComponent ]
		})
			.compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(MobileFooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
