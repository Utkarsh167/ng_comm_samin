import { Directive, HostListener, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appOnlyNumber]"
})
export class OnlyNumberDirective {
  @Input() validationType: any = null;
  constructor(private _el: ElementRef) {}
  @HostListener("input", ["$event"]) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;

    if (
      this.validationType === "phone" &&
      initalValue.length === 1 &&
      initalValue == 0
    ) {
      this._el.nativeElement.value = null;
      event.stopPropagation();
      return;
    }
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, "");
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
