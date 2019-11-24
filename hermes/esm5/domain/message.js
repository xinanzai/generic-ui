/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getUuidV4String } from './uuid';
/**
 * @abstract
 */
var /**
 * @abstract
 */
Message = /** @class */ (function () {
    function Message(aggregateId, messageType) {
        this.aggregateId = aggregateId;
        this.messageType = messageType;
        this.messageId = getUuidV4String();
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
 */
export { Message };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Message.prototype.messageId;
    /** @type {?} */
    Message.prototype.aggregateId;
    /**
     * @type {?}
     * @protected
     */
    Message.prototype.messageType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7O0FBR3pDOzs7O0lBSUMsaUJBQTZCLFdBQXdCLEVBQzNCLFdBQW1CO1FBRGhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBSDVCLGNBQVMsR0FBVyxlQUFlLEVBQUUsQ0FBQztJQUl2RCxDQUFDOzs7O0lBRUQsZ0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxnQ0FBYzs7O0lBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDhCQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsMEJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsOEJBQVk7Ozs7SUFBWixVQUFhLE9BQWdCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELHdCQUFNOzs7O0lBQU4sVUFBTyxPQUFnQjtRQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Ozs7SUFJRCwrQkFBYTs7OztJQUFiLFVBQWMsR0FBMkI7UUFBekMsaUJBV0M7UUFUQSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7O2dCQUVuQixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLFdBQW1CLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUEvQixDQUErQixFQUFDO1lBRTlFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUVmO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7Ozs7SUFFTywrQkFBYTs7Ozs7SUFBckIsVUFBc0IsV0FBbUI7UUFDeEMsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssV0FBVyxDQUFDO0lBQzlDLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQzs7Ozs7Ozs7OztJQWhEQSw0QkFBdUQ7O0lBRWpDLDhCQUErQjs7Ozs7SUFDOUMsOEJBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VXVpZFY0U3RyaW5nIH0gZnJvbSAnLi91dWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi9hZ2dyZWdhdGUtaWQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWVzc2FnZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtZXNzYWdlSWQ6IHN0cmluZyA9IGdldFV1aWRWNFN0cmluZygpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihwdWJsaWMgYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWVzc2FnZVR5cGU6IHN0cmluZykge1xuXHR9XG5cblx0Z2V0TWVzc2FnZVR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlVHlwZTtcblx0fVxuXG5cdGdldEFnZ3JlZ2F0ZUlkKCk6IEFnZ3JlZ2F0ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGVJZDtcblx0fVxuXG5cdGdldE1lc3NhZ2VJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VJZDtcblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubWVzc2FnZVR5cGU7XG5cdH1cblxuXHRlcXVhbHNCeVR5cGUobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VUeXBlKCkgPT09IG1lc3NhZ2UuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdGVxdWFscyhtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICh0aGlzLmdldE1lc3NhZ2VUeXBlKCkgPT09IG1lc3NhZ2UuZ2V0TWVzc2FnZVR5cGUoKSkgJiYgKHRoaXMubWVzc2FnZUlkID09PSBtZXNzYWdlLm1lc3NhZ2VJZCk7XG5cdH1cblxuXHRvZk1lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlOiBzdHJpbmcpOiBib29sZWFuO1xuXHRvZk1lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlczogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW47XG5cdG9mTWVzc2FnZVR5cGUoYXJnOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cblx0XHRcdGxldCBmb3VuZCA9IGFyZy5maW5kKChtZXNzYWdlVHlwZTogc3RyaW5nKSA9PiB0aGlzLmlzTWVzc2FnZVR5cGUobWVzc2FnZVR5cGUpKTtcblxuXHRcdFx0cmV0dXJuICEhZm91bmQ7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuaXNNZXNzYWdlVHlwZShhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNNZXNzYWdlVHlwZShtZXNzYWdlVHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZVR5cGUoKSA9PT0gbWVzc2FnZVR5cGU7XG5cdH1cbn1cbiJdfQ==