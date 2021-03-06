/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchingRepository } from './searching.repository';
import { ConfigSearchingSetEvent } from '../../domain/config/config-searching-set.event';
export class ConfigSearchingSetEventHandler {
    /**
     * @param {?} structureSearchingRepository
     */
    constructor(structureSearchingRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return ConfigSearchingSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('ConfigSearchingSetEvent')) {
            this.structureSearchingRepository.setEnabled(event.isEnabled(), event.getAggregateId());
        }
    }
}
ConfigSearchingSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigSearchingSetEventHandler.ctorParameters = () => [
    { type: SearchingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigSearchingSetEventHandler.prototype.structureSearchingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL2VuYWJsZWQvY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUt6RixNQUFNLE9BQU8sOEJBQThCOzs7O0lBRTFDLFlBQW9CLDRCQUFpRDtRQUFqRCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQXFCO0lBQ3JFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUE4QjtRQUVwQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN4RjtJQUVGLENBQUM7OztZQWhCRCxVQUFVOzs7O1lBTkYsbUJBQW1COzs7Ozs7O0lBU2Ysc0VBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaGluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3NlYXJjaGluZy5yZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vY29uZmlnL2NvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBDb25maWdTZWFyY2hpbmdTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeTogU2VhcmNoaW5nUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50PiB7XG5cdFx0cmV0dXJuIENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBDb25maWdTZWFyY2hpbmdTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0NvbmZpZ1NlYXJjaGluZ1NldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeS5zZXRFbmFibGVkKGV2ZW50LmlzRW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=