/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureReadModelRootConverter } from '../../../domain-api/read/structure.read-model-root-converter';
export class InMemoryStructureReadStore extends InMemoryReadModelStore {
    /**
     * @param {?} inMemoryProjectStore
     * @param {?} structureConverter
     */
    constructor(inMemoryProjectStore, structureConverter) {
        super(inMemoryProjectStore);
        this.inMemoryProjectStore = inMemoryProjectStore;
        this.structureConverter = structureConverter;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    toReadModel(aggregate) {
        return this.structureConverter.convert(aggregate);
    }
}
InMemoryStructureReadStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryStructureReadStore.ctorParameters = () => [
    { type: InMemoryStructureStore },
    { type: StructureReadModelRootConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureReadStore.prototype.inMemoryProjectStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureReadStore.prototype.structureConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9kb21haW4tYXBpL2luLW1lbW9yeS1zdHJ1Y3R1cmUucmVhZC1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQU0vRyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsc0JBRzVCOzs7OztJQUVuQixZQUFvQixvQkFBNEMsRUFDckQsa0JBQW1EO1FBQzdELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRlQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF3QjtRQUNyRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWlDO0lBRTlELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFNBQTZCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTkYsc0JBQXNCO1lBQ3RCLCtCQUErQjs7Ozs7OztJQVczQiwwREFBb0Q7Ozs7O0lBQzdELHdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdHJ1Y3R1cmUuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSBleHRlbmRzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLFxuXHRTdHJ1Y3R1cmVSZWFkTW9kZWxSb290LFxuXHRTdHJ1Y3R1cmVJZCxcblx0U3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeVByb2plY3RTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb252ZXJ0ZXI6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIpIHtcblx0XHRzdXBlcihpbk1lbW9yeVByb2plY3RTdG9yZSk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Qge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUNvbnZlcnRlci5jb252ZXJ0KGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19