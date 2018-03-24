import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[dropdownToggle]'
})

export class DropdownDirective {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    isShowing: Boolean = false;

    // @HostBinding('class.show') isShowing = false;
    // Cannot use this method because in bootstrap 4, the 'show' class needs to be on the .dropdown-menu itself to be shown.
    // Since the .dropdown-menu is hidden, the 'click' binding does not work because there isn't anything visible to click on. 
    @HostListener('click', ['$event.target']) showDropdown(targetEl) {
        // console.log(targetEl) 
        // Passing Event target to the function. 
        // Not using targetEl. 
        // Just selecting .dropdown-menu div from dropdownToggle selected element i.e. li.
        // console.log(this.elRef.nativeElement); 
        // console.log(this.elRef.nativeElement.querySelector('.dropdown-menu'));
        // console.log(this.isShowing)
        const dropdownEl = this.elRef.nativeElement.querySelector('.dropdown-menu')
        // console.log(dropdownEl)
        !this.isShowing ? this.renderer.addClass(dropdownEl, 'show') : this.renderer.removeClass(dropdownEl, 'show')
        this.isShowing = !this.isShowing;
        // Doesn't hide the menu if mouseout or click outside
    }

    // @HostListener('mouseleave') hideDropdown() {
    //     setTimeout(() => {
    //         const dropdownEl = this.elRef.nativeElement.querySelector('.dropdown-menu')
    //         this.isShowing = !this.isShowing;
    //         this.renderer.removeClass(dropdownEl, 'show')

    //     }, 1500);
    // }
}