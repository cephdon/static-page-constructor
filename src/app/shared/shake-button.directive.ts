import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: '[appShakeButton]'
})
export class ShakeButtonDirective {
	constructor(private el: ElementRef, 
				private renderer: Renderer) { }

	shake() {
		this.toggleClass(true);

		setTimeout(() => {
			this.toggleClass(false);
		}, 500);
	}

	private toggleClass(flag: boolean) {
		this.renderer.setElementClass(
			this.el.nativeElement, 
			'shake-horizontal', 
			flag
		);

		this.renderer.setElementClass(
			this.el.nativeElement, 
			'shake-constant', 
			flag
		);
	}
}
