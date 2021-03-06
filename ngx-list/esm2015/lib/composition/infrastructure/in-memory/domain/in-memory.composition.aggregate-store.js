/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
export class InMemoryCompositionAggregateStore extends InMemoryAggregateStore {
    /**
     * @param {?} inMemoryCompositionStore
     * @param {?} aggregateStoreRegister
     */
    constructor(inMemoryCompositionStore, aggregateStoreRegister) {
        super(inMemoryCompositionStore, aggregateStoreRegister);
    }
}
InMemoryCompositionAggregateStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryCompositionAggregateStore.ctorParameters = () => [
    { type: InMemoryCompositionStore },
    { type: AggregateStoreRegister }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9kb21haW4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUsxRSxNQUFNLE9BQU8saUNBQWtDLFNBQVEsc0JBQTJEOzs7OztJQUVqSCxZQUFZLHdCQUFrRCxFQUMzRCxzQkFBOEM7UUFDaEQsS0FBSyxDQUFDLHdCQUF3QixFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBTkQsVUFBVTs7OztZQUpGLHdCQUF3QjtZQUp4QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIsIEluTWVtb3J5QWdncmVnYXRlU3RvcmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuY29tcG9zaXRpb24uc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZSBleHRlbmRzIEluTWVtb3J5QWdncmVnYXRlU3RvcmU8Q29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihpbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSxcblx0XHRcdFx0YWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSwgYWdncmVnYXRlU3RvcmVSZWdpc3Rlcik7XG5cdH1cblxufVxuIl19