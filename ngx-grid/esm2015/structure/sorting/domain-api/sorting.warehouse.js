/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureReadModelRepository } from '../../../lib/structure/domain-api/read/structure.read-model-repository';
import { structureGlobalId } from '../../../lib/structure/domain-api/structure.global-id';
export class SortingWarehouse {
    /**
     * @param {?} structureRepository
     */
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onStructure(aggregateId = structureGlobalId) {
        return this.structureRepository.onStructure(aggregateId);
    }
}
SortingWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SortingWarehouse.ctorParameters = () => [
    { type: StructureReadModelRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortingWarehouse.prototype.structureRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2RvbWFpbi1hcGkvc29ydGluZy53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFFdEgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFNMUYsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUU1QixZQUE2QixtQkFBaUQ7UUFBakQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE4QjtJQUM5RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxjQUEyQixpQkFBaUI7UUFDdkQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQVJELFVBQVU7Ozs7WUFQRiw0QkFBNEI7Ozs7Ozs7SUFVeEIsK0NBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5Lm9uU3RydWN0dXJlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG59XG4iXX0=