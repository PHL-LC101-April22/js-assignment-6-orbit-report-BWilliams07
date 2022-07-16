import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
s
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

	items: string[] = ['Total:', 'Communication:', 'Probe:', 'Space Station:', 'Telescope:', 'Positioning:', 'Space Debris:'];

  constructor() { }

  ngOnInit() {
  }

  countType(type: string): number {
	let count = 0;
	type = type.substring(0,type.length-1);
	if (this.satellites && type !== 'Total') {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	  return count;
	} else {
		return this.satellites.length;
	}
 }


}
