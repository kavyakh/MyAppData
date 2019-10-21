import { Component, OnInit } from '@angular/core';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

@Component({
  selector: 'app-timepicker-test',
  templateUrl: './timepicker-test.component.html',
  styleUrls: ['./timepicker-test.component.css']
})
export class TimepickerTestComponent implements OnInit {
  time={
    hour:0,
    minute:0
  }

  constructor() { }

  ngOnInit() {
  }

}
