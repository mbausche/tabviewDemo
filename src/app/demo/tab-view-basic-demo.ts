import { Component } from '@angular/core';

@Component({
    selector: 'tab-view-basic-demo',
    templateUrl: './tab-view-basic-demo.html'
})
export class TabViewBasicDemo {
    activeIndex = 0;
    tab1() {
        this.activeIndex = 0;
    }
}
