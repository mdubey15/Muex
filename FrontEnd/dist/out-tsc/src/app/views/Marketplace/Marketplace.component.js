import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MarketplaceComponent = class MarketplaceComponent {
    constructor(api) {
        this.api = api;
        this.message = '';
        this.messages = [];
    }
    ngOnInit() {
        this.hubConnection.on("Send", (msg) => {
            this.messages.push(msg);
        });
    }
    echo() {
        this.hubConnection.invoke("Echo", this.message);
    }
    getSearchedItem() {
    }
};
MarketplaceComponent = tslib_1.__decorate([
    Component({
        template: '<Marketplace></Marketplace>',
        templateUrl: './Marketplace.component.html'
    })
], MarketplaceComponent);
export { MarketplaceComponent };
//# sourceMappingURL=Marketplace.component.js.map