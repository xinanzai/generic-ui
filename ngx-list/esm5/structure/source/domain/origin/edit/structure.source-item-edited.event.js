/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var StructureSourceItemEditedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSourceItemEditedEvent, _super);
    function StructureSourceItemEditedEvent(aggregateId, beforeItem, afterItem) {
        var _this = _super.call(this, aggregateId, 'StructureSourceItemEditedEvent') || this;
        _this.beforeItem = beforeItem;
        _this.afterItem = afterItem;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSourceItemEditedEvent.prototype.getBeforeItem = /**
     * @return {?}
     */
    function () {
        return this.beforeItem;
    };
    /**
     * @return {?}
     */
    StructureSourceItemEditedEvent.prototype.getAfterItem = /**
     * @return {?}
     */
    function () {
        return this.afterItem;
    };
    return StructureSourceItemEditedEvent;
}(DomainEvent));
export { StructureSourceItemEditedEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedEvent.prototype.beforeItem;
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedEvent.prototype.afterItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1qRDtJQUFvRCwwREFBd0I7SUFFM0Usd0NBQVksV0FBd0IsRUFDaEIsVUFBNEIsRUFDNUIsU0FBMkI7UUFGL0MsWUFHQyxrQkFBTSxXQUFXLEVBQUUsZ0NBQWdDLENBQUMsU0FDcEQ7UUFIbUIsZ0JBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLGVBQVMsR0FBVCxTQUFTLENBQWtCOztJQUUvQyxDQUFDOzs7O0lBRUQsc0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxxREFBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUVGLHFDQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUFvRCxXQUFXLEdBZ0I5RDs7Ozs7OztJQWJHLG9EQUE2Qzs7Ozs7SUFDN0MsbURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYmVmb3JlSXRlbTogT3JpZ2luSXRlbUVudGl0eSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZnRlckl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1N0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0QmVmb3JlSXRlbSgpOiBPcmlnaW5JdGVtRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5iZWZvcmVJdGVtO1xuXHR9XG5cblx0Z2V0QWZ0ZXJJdGVtKCk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLmFmdGVySXRlbTtcblx0fVxuXG59XG4iXX0=