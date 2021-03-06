/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '../../common/random-string.generator';
/**
 * @abstract
 * @template I
 */
var /**
 * @abstract
 * @template I
 */
Message = /** @class */ (function () {
    function Message(aggregateId, messageType, messageId) {
        if (messageId === void 0) { messageId = RandomStringGenerator.generate(); }
        this.aggregateId = aggregateId;
        this.messageType = messageType;
        this.messageId = messageId;
    }
    /**
     * @return {?}
     */
    Message.prototype.getMessageType = /**
     * @return {?}
     */
    function () {
        return this.messageType;
    };
    /**
     * @return {?}
     */
    Message.prototype.getAggregateId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    Message.prototype.getMessageId = /**
     * @return {?}
     */
    function () {
        return this.messageId;
    };
    /**
     * @return {?}
     */
    Message.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.messageType;
    };
    /**
     * @param {?} message
     * @return {?}
     */
    Message.prototype.equalsByType = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        return this.getMessageType() === message.getMessageType();
    };
    /**
     * @param {?} message
     * @return {?}
     */
    Message.prototype.equals = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        return (this.getMessageType() === message.getMessageType()) && (this.messageId === message.messageId);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    Message.prototype.ofMessageType = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        var _this = this;
        if (Array.isArray(arg)) {
            /** @type {?} */
            var found = arg.find((/**
             * @param {?} messageType
             * @return {?}
             */
            function (messageType) { return _this.isMessageType(messageType); }));
            return !!found;
        }
        else {
            return this.isMessageType(arg);
        }
    };
    /**
     * @private
     * @param {?} messageType
     * @return {?}
     */
    Message.prototype.isMessageType = /**
     * @private
     * @param {?} messageType
     * @return {?}
     */
    function (messageType) {
        return this.getMessageType() === messageType;
    };
    return Message;
}());
/**
 * @abstract
 * @template I
 */
export { Message };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Message.prototype.aggregateId;
    /**
     * @type {?}
     * @protected
     */
    Message.prototype.messageType;
    /**
     * @type {?}
     * @private
     */
    Message.prototype.messageId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9tZXNzYWdlL21lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUU3RTs7Ozs7SUFFQyxpQkFBdUMsV0FBYyxFQUMzQixXQUFtQixFQUNyQixTQUFvRDtRQUFwRCwwQkFBQSxFQUFBLFlBQW9CLHFCQUFxQixDQUFDLFFBQVEsRUFBRTtRQUZyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBRztRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUEyQztJQUM1RSxDQUFDOzs7O0lBRUQsZ0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxnQ0FBYzs7O0lBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDhCQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsMEJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsOEJBQVk7Ozs7SUFBWixVQUFhLE9BQW1CO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELHdCQUFNOzs7O0lBQU4sVUFBTyxPQUFtQjtRQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Ozs7SUFJRCwrQkFBYTs7OztJQUFiLFVBQWMsR0FBMkI7UUFBekMsaUJBV0M7UUFUQSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7O2dCQUVuQixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLFdBQW1CLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUEvQixDQUErQixFQUFDO1lBRTlFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUVmO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7Ozs7SUFFTywrQkFBYTs7Ozs7SUFBckIsVUFBc0IsV0FBbUI7UUFDeEMsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssV0FBVyxDQUFDO0lBQzlDLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQzs7Ozs7Ozs7Ozs7SUEvQ3NCLDhCQUErQjs7Ozs7SUFDOUMsOEJBQXNDOzs7OztJQUN0Qyw0QkFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4uLy4uL2NvbW1vbi9yYW5kb20tc3RyaW5nLmdlbmVyYXRvcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZXNzYWdlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUlkOiBJLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWVzc2FnZVR5cGU6IHN0cmluZyxcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBtZXNzYWdlSWQ6IHN0cmluZyA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSB7XG5cdH1cblxuXHRnZXRNZXNzYWdlVHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VUeXBlO1xuXHR9XG5cblx0Z2V0QWdncmVnYXRlSWQoKTogSSB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRNZXNzYWdlSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlSWQ7XG5cdH1cblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VUeXBlO1xuXHR9XG5cblx0ZXF1YWxzQnlUeXBlKG1lc3NhZ2U6IE1lc3NhZ2U8ST4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlVHlwZSgpID09PSBtZXNzYWdlLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRlcXVhbHMobWVzc2FnZTogTWVzc2FnZTxJPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAodGhpcy5nZXRNZXNzYWdlVHlwZSgpID09PSBtZXNzYWdlLmdldE1lc3NhZ2VUeXBlKCkpICYmICh0aGlzLm1lc3NhZ2VJZCA9PT0gbWVzc2FnZS5tZXNzYWdlSWQpO1xuXHR9XG5cblx0b2ZNZXNzYWdlVHlwZShtZXNzYWdlVHlwZTogc3RyaW5nKTogYm9vbGVhbjtcblx0b2ZNZXNzYWdlVHlwZShtZXNzYWdlVHlwZXM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuO1xuXHRvZk1lc3NhZ2VUeXBlKGFyZzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXG5cdFx0XHRsZXQgZm91bmQgPSBhcmcuZmluZCgobWVzc2FnZVR5cGU6IHN0cmluZykgPT4gdGhpcy5pc01lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlKSk7XG5cblx0XHRcdHJldHVybiAhIWZvdW5kO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmlzTWVzc2FnZVR5cGUoYXJnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzTWVzc2FnZVR5cGUobWVzc2FnZVR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VUeXBlKCkgPT09IG1lc3NhZ2VUeXBlO1xuXHR9XG59XG4iXX0=