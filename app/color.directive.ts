import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private ele : ElementRef) { }
  changeColor(color:string){
    this.ele.nativeElement.style.backgroundColor = color;
  }
@HostListener('mouseenter')
onMouseEnter()
{
  this.changeColor('magenta');
}
@HostListener('mouseleave')
onMouseLeave()
{
  this.changeColor('yellow');
}
}
