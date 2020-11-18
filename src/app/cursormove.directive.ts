import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cursormove]'
})
export class CursormoveDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('click')
  focus() {
    const input =  this.elementRef.nativeElement;
    const first_index = input.value.indexOf('_');
    console.log(first_index);
    input.setSelectionRange(first_index,first_index);
    // input.scrollLeft = input.scrollWidth;
  }
}
