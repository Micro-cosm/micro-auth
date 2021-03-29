

import {	environment		} from '../../environments/environment';
import {	Component,
			OnInit			} from '@angular/core';
import {	ActivatedRoute,
			Router			} from '@angular/router';


@Component({
	selector:		'app-footer',
	templateUrl:	'./footer.component.html',
	styleUrls:	[	'./footer.component.sass'	]
})


export class FooterComponent implements OnInit {
	env:	any;
	params:	any;
	loading = true;
	
	constructor (
		private router:	Router,
		private route:	ActivatedRoute,
	) {
		this.env = environment;
		this.route.params.subscribe ( params => this.params = params );
	}
	
	ngOnInit () {
		let pageName = this.params.page;
		if ( pageName === undefined ) pageName = 'footer';
	}
}
