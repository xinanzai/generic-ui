/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainObject } from '@generic-ui/hermes';
import { VerticalRange } from './vertical-range';
import { VerticalFormationContainerHeight } from './container/vertical-formation.container-height';
var VerticalFormation = /** @class */ (function () {
    function VerticalFormation(enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        if (enabled === void 0) { enabled = false; }
        if (viewportHeight === void 0) { viewportHeight = 0; }
        if (sourceSize === void 0) { sourceSize = 0; }
        if (scrollPosition === void 0) { scrollPosition = 0; }
        this.enabled = enabled;
        this.rowHeight = 42;
        this.hiddenItemsTop = 5;
        this.hiddenItemsBottom = 2;
        this.container = new VerticalFormationContainerHeight();
        this.sourceSize = sourceSize;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.container.setContainerHeight(viewportHeight);
        this.scrollPosition = scrollPosition;
        if (Number.isInteger(rowHeight)) {
            this.rowHeight = rowHeight;
        }
        if (Number.isInteger(hiddenItemsTop)) {
            this.hiddenItemsTop = hiddenItemsTop;
        }
        if (Number.isInteger(hiddenItemsBottom)) {
            this.hiddenItemsBottom = hiddenItemsBottom;
        }
        this.calculateRange();
    }
    /**
     * @return {?}
     */
    VerticalFormation.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled &&
            this.container.getHeight() > 0 &&
            this.sourceSize > 0;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getViewPortHeight = /**
     * @return {?}
     */
    function () {
        return this.container.getVisibleContainerHeight();
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getSourceHeight = /**
     * @return {?}
     */
    function () {
        return this.container.getSourceHeight();
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getRowHeight = /**
     * @return {?}
     */
    function () {
        return this.rowHeight;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getRange = /**
     * @return {?}
     */
    function () {
        return this.range;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getTopMargin = /**
     * @return {?}
     */
    function () {
        return this.range.getStart() * this.rowHeight;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.calculateRange = /**
     * @return {?}
     */
    function () {
        if (this.calcFullHeight() <= this.container.getHeight()) {
            this.range = new VerticalRange(0, this.sourceSize, 0);
            return;
        }
        /** @type {?} */
        var itemsInViewport = Math.ceil(this.container.getHeight() / this.rowHeight);
        /** @type {?} */
        var viewportPositionIndex = Math.floor(this.scrollPosition / this.rowHeight);
        /** @type {?} */
        var end = (viewportPositionIndex + itemsInViewport + this.hiddenItemsBottom);
        /** @type {?} */
        var topMargin = viewportPositionIndex;
        if (topMargin + itemsInViewport >= this.sourceSize) {
            topMargin = this.sourceSize - itemsInViewport;
        }
        /** @type {?} */
        var start = Math.max(viewportPositionIndex - this.hiddenItemsTop, 0);
        if (end > this.sourceSize) {
            end = this.sourceSize;
            start = end - itemsInViewport;
        }
        // end - itemsInViewport;
        this.range = new VerticalRange(start, end, topMargin);
        return {
            start: start,
            end: end,
            topMargin: topMargin
        };
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    VerticalFormation.prototype.setEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.enabled = enabled;
        // TODO dispatch aggregate event
        if (this.enabled && !this.container.isContainerHeightProperForVirtualScroll()) {
            this.logger.warn('Height needs to be specified in order for virtual scroll to work.');
        }
        this.calculateRange();
    };
    /**
     * @param {?=} sourceSize
     * @return {?}
     */
    VerticalFormation.prototype.setSourceSize = /**
     * @param {?=} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        if (sourceSize === void 0) { sourceSize = 0; }
        this.sourceSize = sourceSize;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.calculateRange();
    };
    /**
     * @param {?} count
     * @return {?}
     */
    VerticalFormation.prototype.setTopHiddenItemsCount = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this.hiddenItemsTop = count;
        this.calculateRange();
    };
    /**
     * @param {?} count
     * @return {?}
     */
    VerticalFormation.prototype.setBottomHiddenItemsCount = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this.hiddenItemsBottom = count;
        this.calculateRange();
    };
    /**
     * @param {?} scrollPosition
     * @return {?}
     */
    VerticalFormation.prototype.setScrollPosition = /**
     * @param {?} scrollPosition
     * @return {?}
     */
    function (scrollPosition) {
        this.scrollPosition = scrollPosition;
        this.calculateRange();
    };
    /**
     * @param {?} height
     * @return {?}
     */
    VerticalFormation.prototype.setViewportHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.container.setContainerHeight(height);
        this.calculateRange();
    };
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    VerticalFormation.prototype.setRowHeight = /**
     * @param {?} rowHeight
     * @return {?}
     */
    function (rowHeight) {
        this.rowHeight = rowHeight;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.calculateRange();
    };
    /**
     * @param {?} logger
     * @return {?}
     */
    VerticalFormation.prototype.setLogger = /**
     * @param {?} logger
     * @return {?}
     */
    function (logger) {
        this.logger = logger;
    };
    // TODO REMOVE
    // TODO REMOVE
    /**
     * @return {?}
     */
    VerticalFormation.prototype.calcFullHeight = 
    // TODO REMOVE
    /**
     * @return {?}
     */
    function () {
        return this.sourceSize * this.rowHeight;
    };
    VerticalFormation.ctorParameters = function () { return [
        { type: Boolean },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
    VerticalFormation = tslib_1.__decorate([
        DomainObject,
        tslib_1.__metadata("design:paramtypes", [Boolean, Number, Number, Number, Number, Number, Number])
    ], VerticalFormation);
    return VerticalFormation;
}());
export { VerticalFormation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.rowHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.hiddenItemsTop;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.hiddenItemsBottom;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.container;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.scrollPosition;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.range;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.sourceSize;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saURBQWlELENBQUM7O0lBd0JsRywyQkFBb0IsT0FBd0IsRUFDekMsY0FBMEIsRUFDMUIsVUFBc0IsRUFDdEIsY0FBMEIsRUFDMUIsU0FBa0IsRUFDbEIsY0FBdUIsRUFDdkIsaUJBQTBCO1FBTlQsd0JBQUEsRUFBQSxlQUF3QjtRQUN6QywrQkFBQSxFQUFBLGtCQUEwQjtRQUMxQiwyQkFBQSxFQUFBLGNBQXNCO1FBQ3RCLCtCQUFBLEVBQUEsa0JBQTBCO1FBSFQsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFoQnBDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFFM0Isc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLGNBQVMsR0FBcUMsSUFBSSxnQ0FBZ0MsRUFBRSxDQUFDO1FBaUI1RixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBRXJDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FB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N0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQscUNBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUVELGNBQWM7Ozs7O0lBQ2QsMENBQWM7Ozs7O0lBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7Ozs7O0lBaEtXLGlCQUFpQjtRQUQ3QixZQUFZOztPQUNBLGlCQUFpQixDQWtLN0I7SUFBRCx3QkFBQztDQUFBLElBQUE7U0FsS1ksaUJBQWlCOzs7Ozs7SUFFN0Isc0NBQStCOzs7OztJQUUvQiwyQ0FBbUM7Ozs7O0lBRW5DLDhDQUFzQzs7Ozs7SUFFdEMsc0NBQTZGOzs7OztJQUU3RiwyQ0FBK0I7Ozs7O0lBRS9CLGtDQUE2Qjs7Ozs7SUFFN0IsdUNBQTJCOzs7OztJQUUzQixtQ0FBdUI7Ozs7O0lBRVgsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluT2JqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVmVydGljYWxSYW5nZSB9IGZyb20gJy4vdmVydGljYWwtcmFuZ2UnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Db250YWluZXJIZWlnaHQgfSBmcm9tICcuL2NvbnRhaW5lci92ZXJ0aWNhbC1mb3JtYXRpb24uY29udGFpbmVyLWhlaWdodCc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5cblxuQERvbWFpbk9iamVjdFxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uIHtcblxuXHRwcml2YXRlIHJvd0hlaWdodDogbnVtYmVyID0gNDI7XG5cblx0cHJpdmF0ZSBoaWRkZW5JdGVtc1RvcDogbnVtYmVyID0gNTtcblxuXHRwcml2YXRlIGhpZGRlbkl0ZW1zQm90dG9tOiBudW1iZXIgPSAyO1xuXG5cdHByaXZhdGUgY29udGFpbmVyOiBWZXJ0aWNhbEZvcm1hdGlvbkNvbnRhaW5lckhlaWdodCA9IG5ldyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnRhaW5lckhlaWdodCgpO1xuXG5cdHByaXZhdGUgc2Nyb2xsUG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHJhbmdlOiBWZXJ0aWNhbFJhbmdlO1xuXG5cdHByaXZhdGUgc291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdHByaXZhdGUgbG9nZ2VyOiBMb2dnZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIgPSAwLFxuXHRcdFx0XHRzb3VyY2VTaXplOiBudW1iZXIgPSAwLFxuXHRcdFx0XHRzY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gMCxcblx0XHRcdFx0cm93SGVpZ2h0PzogbnVtYmVyLFxuXHRcdFx0XHRoaWRkZW5JdGVtc1RvcD86IG51bWJlcixcblx0XHRcdFx0aGlkZGVuSXRlbXNCb3R0b20/OiBudW1iZXIpIHtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzb3VyY2VTaXplO1xuXHRcdHRoaXMuY29udGFpbmVyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQpO1xuXHRcdHRoaXMuY29udGFpbmVyLnNldENvbnRhaW5lckhlaWdodCh2aWV3cG9ydEhlaWdodCk7XG5cblx0XHR0aGlzLnNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihyb3dIZWlnaHQpKSB7XG5cdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHR9XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihoaWRkZW5JdGVtc1RvcCkpIHtcblx0XHRcdHRoaXMuaGlkZGVuSXRlbXNUb3AgPSBoaWRkZW5JdGVtc1RvcDtcblx0XHR9XG5cblx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihoaWRkZW5JdGVtc0JvdHRvbSkpIHtcblx0XHRcdHRoaXMuaGlkZGVuSXRlbXNCb3R0b20gPSBoaWRkZW5JdGVtc0JvdHRvbTtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCAmJlxuXHRcdFx0dGhpcy5jb250YWluZXIuZ2V0SGVpZ2h0KCkgPiAwICYmXG5cdFx0XHR0aGlzLnNvdXJjZVNpemUgPiAwO1xuXHR9XG5cblx0Z2V0Vmlld1BvcnRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIuZ2V0VmlzaWJsZUNvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0Z2V0U291cmNlSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLmdldFNvdXJjZUhlaWdodCgpO1xuXHR9XG5cblx0Z2V0Um93SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cblx0Z2V0UmFuZ2UoKTogVmVydGljYWxSYW5nZSB7XG5cdFx0cmV0dXJuIHRoaXMucmFuZ2U7XG5cdH1cblxuXHRnZXRUb3BNYXJnaW4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yYW5nZS5nZXRTdGFydCgpICogdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxuXHRjYWxjdWxhdGVSYW5nZSgpOiBhbnkge1xuXG5cdFx0aWYgKHRoaXMuY2FsY0Z1bGxIZWlnaHQoKSA8PSB0aGlzLmNvbnRhaW5lci5nZXRIZWlnaHQoKSkge1xuXHRcdFx0dGhpcy5yYW5nZSA9IG5ldyBWZXJ0aWNhbFJhbmdlKDAsIHRoaXMuc291cmNlU2l6ZSwgMCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXRlbXNJblZpZXdwb3J0ID0gTWF0aC5jZWlsKHRoaXMuY29udGFpbmVyLmdldEhlaWdodCgpIC8gdGhpcy5yb3dIZWlnaHQpLFxuXHRcdFx0dmlld3BvcnRQb3NpdGlvbkluZGV4ID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbFBvc2l0aW9uIC8gdGhpcy5yb3dIZWlnaHQpO1xuXG5cdFx0bGV0IGVuZCA9ICh2aWV3cG9ydFBvc2l0aW9uSW5kZXggKyBpdGVtc0luVmlld3BvcnQgKyB0aGlzLmhpZGRlbkl0ZW1zQm90dG9tKTtcblxuXHRcdGxldCB0b3BNYXJnaW4gPSB2aWV3cG9ydFBvc2l0aW9uSW5kZXg7XG5cblx0XHRpZiAodG9wTWFyZ2luICsgaXRlbXNJblZpZXdwb3J0ID49IHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0dG9wTWFyZ2luID0gdGhpcy5zb3VyY2VTaXplIC0gaXRlbXNJblZpZXdwb3J0O1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IE1hdGgubWF4KHZpZXdwb3J0UG9zaXRpb25JbmRleCAtIHRoaXMuaGlkZGVuSXRlbXNUb3AsIDApO1xuXG5cdFx0aWYgKGVuZCA+IHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0ZW5kID0gdGhpcy5zb3VyY2VTaXplO1xuXHRcdFx0c3RhcnQgPSBlbmQgLSBpdGVtc0luVmlld3BvcnQ7XG5cdFx0fVxuXG5cdFx0Ly8gZW5kIC0gaXRlbXNJblZpZXdwb3J0O1xuXG5cdFx0dGhpcy5yYW5nZSA9IG5ldyBWZXJ0aWNhbFJhbmdlKHN0YXJ0LCBlbmQsIHRvcE1hcmdpbik7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhcnQsXG5cdFx0XHRlbmQsXG5cdFx0XHR0b3BNYXJnaW5cblx0XHR9O1xuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblxuXHRcdC8vIFRPRE8gZGlzcGF0Y2ggYWdncmVnYXRlIGV2ZW50XG5cdFx0aWYgKHRoaXMuZW5hYmxlZCAmJiAhdGhpcy5jb250YWluZXIuaXNDb250YWluZXJIZWlnaHRQcm9wZXJGb3JWaXJ0dWFsU2Nyb2xsKCkpIHtcblx0XHRcdHRoaXMubG9nZ2VyLndhcm4oJ0hlaWdodCBuZWVkcyB0byBiZSBzcGVjaWZpZWQgaW4gb3JkZXIgZm9yIHZpcnR1YWwgc2Nyb2xsIHRvIHdvcmsuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0U291cmNlU2l6ZShzb3VyY2VTaXplOiBudW1iZXIgPSAwKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VTaXplID0gc291cmNlU2l6ZTtcblxuXHRcdHRoaXMuY29udGFpbmVyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0VG9wSGlkZGVuSXRlbXNDb3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oaWRkZW5JdGVtc1RvcCA9IGNvdW50O1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldEJvdHRvbUhpZGRlbkl0ZW1zQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGlkZGVuSXRlbXNCb3R0b20gPSBjb3VudDtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxQb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFZpZXdwb3J0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb250YWluZXIuc2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0Um93SGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XG5cdFx0dGhpcy5jb250YWluZXIuc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZVNpemUgKiB0aGlzLnJvd0hlaWdodCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0TG9nZ2VyKGxvZ2dlcjogTG9nZ2VyKTogdm9pZCB7XG5cdFx0dGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cdH1cblxuXHQvLyBUT0RPIFJFTU9WRVxuXHRjYWxjRnVsbEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemUgKiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG59XG4iXX0=