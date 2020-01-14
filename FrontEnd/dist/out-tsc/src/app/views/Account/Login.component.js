import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(auth, fb) {
        this.auth = auth;
        this.fb = fb;
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        template: '<Login></Login>',
        templateUrl: './Login.component.html'
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=Login.component.js.map