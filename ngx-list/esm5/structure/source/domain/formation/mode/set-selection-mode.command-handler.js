/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSelectionModeCommand } from './set-selection-mode.command';
var SetSelectionModeCommandHandler = /** @class */ (function () {
    function SetSelectionModeCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetSelectionModeCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetSelectionModeCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetSelectionModeCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetSelectionModeCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        aggregate.setSelectionMode(command.getMode());
    };
    SetSelectionModeCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSelectionModeCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetSelectionModeCommandHandler;
}());
export { SetSelectionModeCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSelectionModeCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vZm9ybWF0aW9uL21vZGUvc2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJdkU7SUFHQyx3Q0FBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELG1EQUFVOzs7SUFBVjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsNERBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQWdDO1FBQ2xGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCx3REFBZTs7Ozs7SUFBZixVQUFnQixTQUE2QixFQUFFLE9BQWdDO1FBQzlFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFOMkIsb0JBQW9COztJQXdCMUQscUNBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSw4QkFBOEI7Ozs7OztJQUU5Qiw4REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZCB9IGZyb20gJy4vc2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldFNlbGVjdGlvbk1vZGVDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0U2VsZWN0aW9uTW9kZUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmQpOiB2b2lkIHtcblx0XHRhZ2dyZWdhdGUuc2V0U2VsZWN0aW9uTW9kZShjb21tYW5kLmdldE1vZGUoKSk7XG5cdH1cblxufVxuIl19