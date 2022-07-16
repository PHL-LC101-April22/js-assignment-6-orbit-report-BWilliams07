import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

  sourceList: Satellite[];
  displayList: Satellite[];

	constructor() {
		this.sourceList = [];
		this.displayList = [];
		let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

		window.fetch(satellitesUrl).then(function (response) {
			response.json().then(function (data) {

				let fetchedSatellites = data.satellites;
				for(let i=0; i < fetchedSatellites.length; i++) {
					let satellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
					this.sourceList.push(satellite);
				 }
        
				 this.displayList = this.sourceList.slice(0);
	  
			}.bind(this));
		}.bind(this));

	}

	search(searchTerm: string, byName: boolean, byType: boolean, operational: boolean, orbitType: boolean, launchDate: boolean ): void {
		let matchingSatellites: Satellite[] = [];
		searchTerm = searchTerm.toLowerCase();
		//console.log(searchKind);
		if (byName) {
			for(let i=0; i < this.sourceList.length; i++) {
				let name = this.sourceList[i].name.toLowerCase();
				if (name.indexOf(searchTerm) >= 0) {
					matchingSatellites.push(this.sourceList[i]);
				}
			}
		}

		if (operational) {
			for(let i=0; i < this.sourceList.length; i++) {
				let operational = String(this.sourceList[i].operational);
				if (operational.indexOf(searchTerm) >= 0) {
					matchingSatellites.push(this.sourceList[i]);
				}
			}
		}

		if (type) {
			for(let i=0; i < this.sourceList.length; i++) {
				let type = this.sourceList[i].type.toLowerCase();
				if (type.indexOf(searchTerm) >= 0) {
					matchingSatellites.push(this.sourceList[i]);
				}
			}
		}

		if (orbitType) {
			for(let i=0; i < this.sourceList.length; i++) {
				let orbitType = this.sourceList[i].orbitType.toLowerCase();
				if (orbitType.indexOf(searchTerm) >= 0) {
					matchingSatellites.push(this.sourceList[i]);
				}
			}
		}

		if (launchDate) {
			for(let i=0; i < this.sourceList.length; i++) {
				let launchDate = this.sourceList[i].launchDate.toLowerCase();
				if (launchDate.indexOf(searchTerm) >= 0) {
					matchingSatellites.push(this.sourceList[i]);
				}
			}
		}
		this.displayList = matchingSatellites;
	}


}
