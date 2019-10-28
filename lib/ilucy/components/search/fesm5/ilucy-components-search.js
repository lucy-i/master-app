import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SearchService.ctorParameters = function () { return []; };
    /** @nocollapse */ SearchService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(); }, token: SearchService, providedIn: "root" });
    return SearchService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ilc-search',
                    template: "\n    <p>\n      search works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return []; };
    return SearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SearchComponent],
                    imports: [],
                    exports: [SearchComponent]
                },] }
    ];
    return SearchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SearchComponent, SearchModule, SearchService };
//# sourceMappingURL=ilucy-components-search.js.map
