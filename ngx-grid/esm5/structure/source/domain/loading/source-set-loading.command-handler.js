/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSourceLoadingEvent } from './set-source-loading.event';
import { SourceSetLoadingCommand } from './source-set-loading.command';
var SourceSetLoadingCommandHandler = /** @class */ (function () {
    function SourceSetLoadingCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SourceSetLoadingCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SourceSetLoadingCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SourceSetLoadingCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new SetSourceLoadingEvent(command.getAggregateId()));
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SourceSetLoadingCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var enabled = command.isEnabled();
        /** @type {?} */
        var source = aggregate.getSource();
        source.setLoading(enabled);
    };
    SourceSetLoadingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceSetLoadingCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SourceSetLoadingCommandHandler;
}());
export { SourceSetLoadingCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceSetLoadingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vbG9hZGluZy9zb3VyY2Utc2V0LWxvYWRpbmcuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUl2RTtJQUdDLHdDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsbURBQVU7OztJQUFWO1FBQ0MsT0FBTyx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFRCw0REFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBZ0M7UUFDbEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Ozs7O0lBRUQsd0RBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUFnQzs7WUFFeEUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7O1lBQ2xDLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO1FBRS9CLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Z0JBcEJELFVBQVU7Ozs7Z0JBUDJCLG9CQUFvQjs7SUE2QjFELHFDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksOEJBQThCOzs7Ozs7SUFFOUIsOERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0U291cmNlTG9hZGluZ0V2ZW50IH0gZnJvbSAnLi9zZXQtc291cmNlLWxvYWRpbmcuZXZlbnQnO1xuaW1wb3J0IHsgU291cmNlU2V0TG9hZGluZ0NvbW1hbmQgfSBmcm9tICcuL3NvdXJjZS1zZXQtbG9hZGluZy5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlU2V0TG9hZGluZ0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNvdXJjZVNldExvYWRpbmdDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNvdXJjZVNldExvYWRpbmdDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU291cmNlU2V0TG9hZGluZ0NvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFNldFNvdXJjZUxvYWRpbmdFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU291cmNlU2V0TG9hZGluZ0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSBjb21tYW5kLmlzRW5hYmxlZCgpLFxuXHRcdFx0c291cmNlID0gYWdncmVnYXRlLmdldFNvdXJjZSgpO1xuXG5cdFx0c291cmNlLnNldExvYWRpbmcoZW5hYmxlZCk7XG5cdH1cblxufVxuIl19