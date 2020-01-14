import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    get isAuthenticated() {
        return !!localStorage.getItem('token');
    }
    register(credentials) {
        this.http.post(`https://localhost:44316/api/Account`, credentials).subscribe(res => {
            this.authenticate(res);
        });
    }
    login(credentials) {
        this.http.post(`https://localhost:44316/api/Account/login`, credentials).subscribe(res => {
            this.authenticate(res);
        });
    }
    logout() {
        localStorage.removeItem('token');
    }
    authenticate(res) {
        localStorage.setItem('token', res);
        this.router.navigate(['/']);
    }
};
AuthService = tslib_1.__decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map