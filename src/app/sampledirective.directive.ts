import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSampledirective]',
})
export class SampledirectiveDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = '#ce4e0e';
  }
}
