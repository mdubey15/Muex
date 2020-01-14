import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(auth, fb) {
        this.auth = auth;
        this.fb = fb;
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    register() {
        console.log(this.form);
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        template: '<Register></Register>',
        templateUrl: './Register.component.html'
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=Register.component.js.map