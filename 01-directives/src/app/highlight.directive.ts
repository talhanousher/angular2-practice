import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @Input() defaultColor;
  @Input() highlightColor;
  private backgroundColor = this.defaultColor;

  @HostListener('mouseenter') mouseenter() {
    this.backgroundColor = this.highlightColor;
    console.log(this.backgroundColor);
  }
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }




  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }
}
