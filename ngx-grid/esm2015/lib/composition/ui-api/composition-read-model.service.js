/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { CompositionRepository } from '../domain/read/composition.repository';
import { globalCompositionId } from '../domain/global-composition-id';
export class CompositionReadModelService {
    /**
     * @param {?} compositionRepository
     */
    constructor(compositionRepository) {
        this.compositionRepository = compositionRepository;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onWidth(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getWidth())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onContainerWidth(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getContainerWidth())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onWidthForEachColumn(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getAllColumns().map((/**
         * @param {?} c
         * @return {?}
         */
        c => c.width)))));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onHeaderColumns(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getActiveHeaderColumns())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onAllColumns(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getHeaderColumns())));
    }
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @return {?}
     */
    onSortOrder(fieldId, compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getActiveHeaderColumns())), map((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            return columns.filter((/**
             * @param {?} c
             * @return {?}
             */
            (c) => c.getFieldId().equals(fieldId)));
        })), filter((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            return columns.length > 0;
        })), map((/**
         * @param {?} columns
         * @return {?}
         */
        columns => columns[0].getSortStatus())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onTemplateColumns(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getTemplateColumns())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onResizeWidth(compositionId = globalCompositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.isResizeWidthEnabled())));
    }
}
CompositionReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionReadModelService.ctorParameters = () => [
    { type: CompositionRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionReadModelService.prototype.compositionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBU3RFLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFFdkMsWUFBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsZ0JBQStCLG1CQUFtQjtRQUN6RCxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQ3pELENBQUM7SUFDUixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLGdCQUErQixtQkFBbUI7UUFDbEUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLFdBQXdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLENBQ2xFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLGdCQUErQixtQkFBbUI7UUFDdEUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLFdBQXdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLEVBQUMsQ0FDaEYsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLGdCQUErQixtQkFBbUI7UUFDakUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLFdBQXdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxFQUFDLENBQ3ZFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQzlELE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ2pCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxXQUF3QixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxDQUNqRSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQWdCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUMvRSxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFLEVBQUMsRUFDdkUsR0FBRzs7OztRQUFDLENBQUMsT0FBdUMsRUFBRSxFQUFFO1lBQy9DLE9BQU8sT0FBTyxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO1FBQzlELENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFBQyxDQUFDLE9BQXVDLEVBQUUsRUFBRTtZQUNsRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUMxQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQ25FLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ2pCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxXQUF3QixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxDQUNuRSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsZ0JBQStCLG1CQUFtQjtRQUMvRCxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLEVBQUMsQ0FDckUsQ0FBQztJQUNSLENBQUM7OztZQTNFRCxVQUFVOzs7O1lBVkYscUJBQXFCOzs7Ozs7O0lBYWpCLDREQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vcmVhZC9jb21wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgZ2xvYmFsQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2RvbWFpbi9nbG9iYWwtY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb24gfSBmcm9tICcuLi9kb21haW4vcmVhZC9jb21wb3NpdGlvbic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtc3RhdHVzJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvblJlcG9zaXRvcnk6IENvbXBvc2l0aW9uUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25XaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0V2lkdGgoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb24pID0+IGNvbXBvc2l0aW9uLmdldENvbnRhaW5lcldpZHRoKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbldpZHRoRm9yRWFjaENvbHVtbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8QXJyYXk8bnVtYmVyPj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb24pID0+IGNvbXBvc2l0aW9uLmdldEFsbENvbHVtbnMoKS5tYXAoYyA9PiBjLndpZHRoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uSGVhZGVyQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0QWN0aXZlSGVhZGVyQ29sdW1ucygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25BbGxDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKSA9PiBjb21wb3NpdGlvbi5nZXRIZWFkZXJDb2x1bW5zKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblNvcnRPcmRlcihmaWVsZElkOiBGaWVsZElkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8U29ydFN0YXR1cz4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb24pID0+IGNvbXBvc2l0aW9uLmdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKSksXG5cdFx0XHRcdFx0ICAgbWFwKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBjb2x1bW5zLmZpbHRlcigoYykgPT4gYy5nZXRGaWVsZElkKCkuZXF1YWxzKGZpZWxkSWQpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbHVtbnMubGVuZ3RoID4gMDtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoY29sdW1ucyA9PiBjb2x1bW5zWzBdLmdldFNvcnRTdGF0dXMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uVGVtcGxhdGVDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0VGVtcGxhdGVDb2x1bW5zKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblJlc2l6ZVdpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uaXNSZXNpemVXaWR0aEVuYWJsZWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=