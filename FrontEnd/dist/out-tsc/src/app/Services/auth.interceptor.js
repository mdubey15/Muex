import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthInterceptor = class AuthInterceptor {
    constructor() { }
    intercept(req, next) {
        var token = localStorage.getItem('token');
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(authRequest);
    }
};
AuthInterceptor = tslib_1.__decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map