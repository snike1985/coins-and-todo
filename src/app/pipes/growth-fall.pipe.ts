import {Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'growthFall'
})
export class GrowthFallPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {
    }

    transform(value: any, args?: any): any {

        if (value > 0) {
            return this.sanitizer.sanitize(SecurityContext.HTML, `<span class="growthFall_green">${value}%</span>`);
        } else {
            return this.sanitizer.sanitize(SecurityContext.HTML, `<span class="growthFall_red">${value}%</span>`);
        }

    }

}
