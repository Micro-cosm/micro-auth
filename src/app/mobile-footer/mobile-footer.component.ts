

import {	environment		} from '../../environments/environment';
import {	Component,
			OnInit			} from '@angular/core';
import {	DomSanitizer	} from '@angular/platform-browser';
import {	ActivatedRoute,
			Router			} from '@angular/router';
import {	Observable		} from 'rxjs';

@Component({
	selector: 'app-mobile-footer',
	templateUrl: './mobile-footer.component.html',
	styleUrls: ['./mobile-footer.component.sass']
})

export class MobileFooterComponent implements OnInit {
	
	env:	any;
	params:	any;
	
	loading = true;
	
	constructor (
		private router:		Router,
		private route:		ActivatedRoute,
	) {
		this.env = environment;
		this.route.params.subscribe ( params => this.params = params );
		this.router.routeReuseStrategy.shouldReuseRoute	= () => false
	}
	
	ngOnInit () {
		let pageName = this.params.page;
		if ( pageName === undefined ) pageName = 'mobile-footer'
	}
}
