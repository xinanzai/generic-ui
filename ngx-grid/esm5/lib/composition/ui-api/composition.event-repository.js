/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from '../domain/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../domain/width/set-container-width/composition-container-width-set.event';
var CompositionEventRepository = /** @class */ (function () {
    function CompositionEventRepository(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onColumnsChanged = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionColumnsSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === compositionId.toString(); })));
    };
    // onWidthChanged(compositionId: CompositionId): Observable<number> {
    // 	return this.domainEventBus
    // 			   .ofEvent(
    // 				   CompositionColumnsSetEvent
    // 			   )
    // 			   .pipe(
    // 				   filter((event: DomainEvent) => event.getAggregateId().toString() === compositionId.toString())
    // 			   );
    // }
    // onWidthChanged(compositionId: CompositionId): Observable<number> {
    // 	return this.domainEventBus
    // 			   .ofEvent(
    // 				   CompositionColumnsSetEvent
    // 			   )
    // 			   .pipe(
    // 				   filter((event: DomainEvent) => event.getAggregateId().toString() === compositionId.toString())
    // 			   );
    // }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onContainerWidthChanged = 
    // onWidthChanged(compositionId: CompositionId): Observable<number> {
    // 	return this.domainEventBus
    // 			   .ofEvent(
    // 				   CompositionColumnsSetEvent
    // 			   )
    // 			   .pipe(
    // 				   filter((event: DomainEvent) => event.getAggregateId().toString() === compositionId.toString())
    // 			   );
    // }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionContainerWidthSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().equals(compositionId); })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.getPayload();
        })), filter((/**
         * @param {?} width
         * @return {?}
         */
        function (width) { return !!width; })));
    };
    CompositionEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return CompositionEventRepository;
}());
export { CompositionEventRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionEventRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBRzlIO0lBR0Msb0NBQTZCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUMzRCxDQUFDOzs7OztJQUVELHFEQUFnQjs7OztJQUFoQixVQUFpQixhQUE0QjtRQUU1QyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCwwQkFBMEIsQ0FDMUI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQTlELENBQThELEVBQUMsQ0FDOUYsQ0FBQztJQUNSLENBQUM7SUFFRCxxRUFBcUU7SUFDckUsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGVBQWU7SUFDZix3R0FBd0c7SUFDeEcsV0FBVztJQUNYLElBQUk7Ozs7Ozs7Ozs7Ozs7O0lBRUosNERBQXVCOzs7Ozs7Ozs7Ozs7OztJQUF2QixVQUF3QixhQUE0QjtRQUNuRCxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxpQ0FBaUMsQ0FDakM7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQTVDLENBQTRDLEVBQUMsRUFDNUUsR0FBRzs7OztRQUFDLFVBQUMsS0FBd0M7WUFDNUMsT0FBTyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLFVBQUMsS0FBYSxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLEVBQUMsQ0FDbEMsQ0FBQztJQUNSLENBQUM7O2dCQXZDRCxVQUFVOzs7O2dCQVBXLGNBQWM7O0lBZ0RwQyxpQ0FBQztDQUFBLEFBekNELElBeUNDO1NBeENZLDBCQUEwQjs7Ozs7O0lBRTFCLG9EQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi5jb2x1bW5zLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdH1cblxuXHRvbkNvbHVtbnNDaGFuZ2VkKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IGNvbXBvc2l0aW9uSWQudG9TdHJpbmcoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdC8vIG9uV2lkdGhDaGFuZ2VkKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHQvLyBcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdC8vIFx0XHRcdCAgIC5vZkV2ZW50KFxuXHQvLyBcdFx0XHRcdCAgIENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50XG5cdC8vIFx0XHRcdCAgIClcblx0Ly8gXHRcdFx0ICAgLnBpcGUoXG5cdC8vIFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQpID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gY29tcG9zaXRpb25JZC50b1N0cmluZygpKVxuXHQvLyBcdFx0XHQgICApO1xuXHQvLyB9XG5cblx0b25Db250YWluZXJXaWR0aENoYW5nZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQpID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkuZXF1YWxzKGNvbXBvc2l0aW9uSWQpKSxcblx0XHRcdFx0XHQgICBtYXAoKGV2ZW50OiBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBldmVudC5nZXRQYXlsb2FkKCk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKCh3aWR0aDogbnVtYmVyKSA9PiAhIXdpZHRoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==