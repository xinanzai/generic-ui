/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SortToggledEvent } from '../../../../../structure/sorting/domain/toggle/sort-toggled.event';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { ColumnFieldId } from '../field/column-field.id';
import { ChangeSortParams } from './change-sort.params';
import { SortOrderSetEvent } from '../../../../../structure/sorting/domain/order/sort-order-set.event';
export class CompositionChangeSortStatusEventHandler {
    /**
     * @param {?} compositionDispatcher
     */
    constructor(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @return {?}
     */
    forEvents() {
        return [
            SortToggledEvent,
            SortOrderSetEvent
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('SortToggledEvent')) {
            /** @type {?} */
            const compositionId = event.getCompositionId();
            /** @type {?} */
            const dirs = event.getDirections();
            /** @type {?} */
            let params = dirs.map((/**
             * @param {?} dir
             * @return {?}
             */
            (dir) => {
                /** @type {?} */
                const columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            }));
            this.compositionDispatcher.changeSort(compositionId, params);
        }
        if (event.ofMessageType('SortOrderSetEvent')) {
            /** @type {?} */
            const compositionId = event.getCompositionId();
            /** @type {?} */
            const dirs = event.getDirections();
            /** @type {?} */
            let params = dirs.map((/**
             * @param {?} dir
             * @return {?}
             */
            (dir) => {
                /** @type {?} */
                const columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            }));
            this.compositionDispatcher.changeSort(compositionId, params);
        }
    }
}
CompositionChangeSortStatusEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionChangeSortStatusEventHandler.ctorParameters = () => [
    { type: CompositionDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEventHandler.prototype.compositionDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFFckcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBTXZHLE1BQU0sT0FBTyx1Q0FBdUM7Ozs7SUFFbkQsWUFBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDaEUsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPO1lBQ04sZ0JBQWdCO1lBQ2hCLGlCQUFpQjtTQUNqQixDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBMkM7UUFFakQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7O2tCQUV0QyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFOztrQkFDN0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUU7O2dCQUV6QixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFOztzQkFFNUIsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRTVELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELENBQUMsRUFBQztZQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7O2tCQUV2QyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFOztrQkFDN0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUU7O2dCQUV6QixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFOztzQkFFNUIsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRTVELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELENBQUMsRUFBQztZQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdEO0lBQ0YsQ0FBQzs7O1lBNUNELFVBQVU7Ozs7WUFSRixxQkFBcUI7Ozs7Ozs7SUFXakIsd0VBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudFR5cGUsIE11bHRpRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU29ydFRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3J0aW5nL2RvbWFpbi90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuL2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0T3JkZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3J0aW5nL2RvbWFpbi9vcmRlci9zb3J0LW9yZGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uaWQnO1xuXG5leHBvcnQgdHlwZSBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudFR5cGUgPSBTb3J0VG9nZ2xlZEV2ZW50IHwgU29ydE9yZGVyU2V0RXZlbnQ7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxDb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudFR5cGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRmb3JFdmVudHMoKTogQXJyYXk8RG9tYWluRXZlbnRUeXBlPENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50VHlwZT4+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U29ydFRvZ2dsZWRFdmVudCxcblx0XHRcdFNvcnRPcmRlclNldEV2ZW50XG5cdFx0XTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRUeXBlKTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU29ydFRvZ2dsZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IGNvbXBvc2l0aW9uSWQgPSBldmVudC5nZXRDb21wb3NpdGlvbklkKCksXG5cdFx0XHRcdGRpcnMgPSBldmVudC5nZXREaXJlY3Rpb25zKCk7XG5cblx0XHRcdGxldCBwYXJhbXMgPSBkaXJzLm1hcCgoZGlyOiBhbnkpID0+IHtcblxuXHRcdFx0XHRjb25zdCBjb2x1bW5GaWVsZElkID0gbmV3IENvbHVtbkZpZWxkSWQoZGlyLmZpZWxkSWQuZ2V0SWQoKSk7XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDaGFuZ2VTb3J0UGFyYW1zKGNvbHVtbkZpZWxkSWQsIGRpci5kaXJlY3Rpb24pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLmNoYW5nZVNvcnQoY29tcG9zaXRpb25JZCwgcGFyYW1zKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU29ydE9yZGVyU2V0RXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCBjb21wb3NpdGlvbklkID0gZXZlbnQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0XHRkaXJzID0gZXZlbnQuZ2V0RGlyZWN0aW9ucygpO1xuXG5cdFx0XHRsZXQgcGFyYW1zID0gZGlycy5tYXAoKGRpcjogYW55KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgY29sdW1uRmllbGRJZCA9IG5ldyBDb2x1bW5GaWVsZElkKGRpci5maWVsZElkLmdldElkKCkpO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgQ2hhbmdlU29ydFBhcmFtcyhjb2x1bW5GaWVsZElkLCBkaXIuZGlyZWN0aW9uKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5jaGFuZ2VTb3J0KGNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdFx0fVxuXHR9XG5cblxufVxuIl19