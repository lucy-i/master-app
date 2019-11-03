import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ilc-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  @Input()
  isClosed = true;
  constructor() { }

  ngOnInit() {
  }

}
