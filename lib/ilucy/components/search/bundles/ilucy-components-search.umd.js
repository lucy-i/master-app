(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ilucy/components/search', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.ilucy = global.ilucy || {}, global.ilucy.components = global.ilucy.components || {}, global.ilucy.components.search = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchService = /** @class */ (function () {
        function SearchService() {
        }
        SearchService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SearchService.ctorParameters = function () { return []; };
        /** @nocollapse */ SearchService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(); }, token: SearchService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [SearchComponent],
                        imports: [],
                        exports: [SearchComponent]
                    },] }
        ];
        return SearchModule;
    }());

    exports.SearchComponent = SearchComponent;
    exports.SearchModule = SearchModule;
    exports.SearchService = SearchService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ilucy-components-search.umd.js.map
