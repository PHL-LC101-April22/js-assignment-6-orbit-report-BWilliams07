import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
l
@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})

export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[];



  constructor() { }

  ngOnInit() {
  }
   isEven(satellite: Satellite): boolean {
	if ((this.satellites.indexOf(satellite)+1) % 2 === 1) {
		return true;
	} else {
		return false;
	}
  }

	sort(column: string): void {
		// array.sort modifies the array, sorting the items based on the given compare function
		this.satellites.sort(function (a: Satellite, b: Satellite): number {
			if (a[column] < b[column]) {
				return -1;
			} else if (a[column] > b[column]) {
				return 1;
			}
			return 0;
		});
	}

}
