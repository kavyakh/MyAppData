import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  message:string="welcome to greeting"
  textColor="text-color"
  textBkColor="text-bkcolor"
  is
  greetingStyle=[
    this.textColor,
    this.textBkColor
]

  constructor() { }

  ngOnInit() {
  }
  sayGreet(event){
    console.log(event)
    this.message="good morning" + event.type + " " + event.target+ " " +event.target.value

  }
  color1=true;
  change='red';
  toggleColor()
  {
    this.color1=!this.color1;
    this.change=this.color1 ? 'red':'blue'
  }

}
