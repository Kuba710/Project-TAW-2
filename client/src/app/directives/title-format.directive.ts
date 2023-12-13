import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTitleFormat]'
})
export class TitleFormatDirective {

  constructor(private el: ElementRef) { }

    @HostListener('blur') onBlur() {
  	  const value = this.el.nativeElement.value;
  	  this.el.nativeElement.value =  value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }


}
