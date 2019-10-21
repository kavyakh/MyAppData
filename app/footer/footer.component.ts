import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
 template:`<h2>&copy;zensar online shopping</h2>
 <h6>all rights reserved</h6>`,
 styles:['h2 {font-weight: normal;}',
          'h6 {color:blue;}']
  
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
