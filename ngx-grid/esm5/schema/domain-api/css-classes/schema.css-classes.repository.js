/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reactive } from '../../../common/cdk/reactive';
var SchemaCssClassesRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaCssClassesRepository, _super);
    function SchemaCssClassesRepository() {
        var _this = _super.call(this) || this;
        _this.theme = new Map();
        _this.theme$ = new ReplaySubject();
        return _this;
    }
    /**
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    SchemaCssClassesRepository.prototype.setCssClass = /**
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    function (theme, schemaId) {
        this.next(theme, schemaId);
    };
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaCssClassesRepository.prototype.on = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.theme$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(schemaId.toString());
        }))
        // distinctUntilChanged()
        );
    };
    /**
     * @private
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    SchemaCssClassesRepository.prototype.next = /**
     * @private
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    function (theme, schemaId) {
        this.theme.set(schemaId.toString(), theme);
        this.theme$.next(this.theme);
    };
    SchemaCssClassesRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCssClassesRepository.ctorParameters = function () { return []; };
    return SchemaCssClassesRepository;
}(Reactive));
export { SchemaCssClassesRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassesRepository.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassesRepository.prototype.theme$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9kb21haW4tYXBpL2Nzcy1jbGFzc2VzL3NjaGVtYS5jc3MtY2xhc3Nlcy5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJeEQ7SUFDZ0Qsc0RBQVE7SUFNdkQ7UUFBQSxZQUNDLGlCQUFPLFNBQ1A7UUFOTyxXQUFLLEdBQUcsSUFBSSxHQUFHLEVBQTBCLENBQUM7UUFFMUMsWUFBTSxHQUFHLElBQUksYUFBYSxFQUErQixDQUFDOztJQUlsRSxDQUFDOzs7Ozs7SUFFRCxnREFBVzs7Ozs7SUFBWCxVQUFZLEtBQXFCLEVBQUUsUUFBa0I7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCx1Q0FBRTs7OztJQUFGLFVBQUcsUUFBa0I7UUFFcEIsT0FBTyxJQUFJLENBQUMsTUFBTTthQUNaLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ2hCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQWdDO1lBQ3BDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUM7UUFDRix5QkFBeUI7U0FDekIsQ0FBQztJQUNSLENBQUM7Ozs7Ozs7SUFFTyx5Q0FBSTs7Ozs7O0lBQVosVUFBYSxLQUFxQixFQUFFLFFBQWtCO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBL0JELFVBQVU7Ozs7SUFpQ1gsaUNBQUM7Q0FBQSxBQWpDRCxDQUNnRCxRQUFRLEdBZ0N2RDtTQWhDWSwwQkFBMEI7Ozs7OztJQUV0QywyQ0FBa0Q7Ozs7O0lBRWxELDRDQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4vc2NoZW1hLWNzcy1jbGFzcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgdGhlbWUgPSBuZXcgTWFwPHN0cmluZywgU2NoZW1hQ3NzQ2xhc3M+KCk7XG5cblx0cHJpdmF0ZSB0aGVtZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBTY2hlbWFDc3NDbGFzcz4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldENzc0NsYXNzKHRoZW1lOiBTY2hlbWFDc3NDbGFzcywgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0KHRoZW1lLCBzY2hlbWFJZCk7XG5cdH1cblxuXHRvbihzY2hlbWFJZDogU2NoZW1hSWQpOiBPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPiB7XG5cblx0XHRyZXR1cm4gdGhpcy50aGVtZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHRoaXMudGFrZVVudGlsKCksXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IE1hcDxzdHJpbmcsIFNjaGVtYUNzc0NsYXNzPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc2NoZW1hSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0XHQgICAvLyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG5leHQodGhlbWU6IFNjaGVtYUNzc0NsYXNzLCBzY2hlbWFJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHR0aGlzLnRoZW1lLnNldChzY2hlbWFJZC50b1N0cmluZygpLCB0aGVtZSk7XG5cdFx0dGhpcy50aGVtZSQubmV4dCh0aGlzLnRoZW1lKTtcblx0fVxuXG59XG4iXX0=