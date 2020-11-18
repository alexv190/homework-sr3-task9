import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cursormove]'
})
export class CursormoveDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('focus')
  focus() {
    const input =  this.elementRef.nativeElement;
    const first_index = input.value.indexOf('_');
    input.setSelectionRange(first_index,first_index);
  }
}
