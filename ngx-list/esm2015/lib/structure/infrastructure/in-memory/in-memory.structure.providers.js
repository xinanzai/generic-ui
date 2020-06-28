/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InMemoryStructureAggregateStore } from './domain/in-memory.structure.aggregate-store';
import { InMemoryStructureAggregateRepository } from './domain/in-memory.structure-aggregate.repository';
import { StructureAggregateRepository } from '../../domain/structure/structure-aggregate.repository';
import { InMemoryStructureReadStore } from './domain-api/in-memory-structure.read-store';
import { StructureReadModelRepository } from '../../domain-api/read/structure.read-model-repository';
import { InMemoryStructureRepository } from './domain-api/in-memory.structure.repository';
import { InMemoryStructureStore } from './in-memory.structure.store';
/** @type {?} */
export const inMemoryStructureCommandProviders = [
    InMemoryStructureAggregateStore,
    {
        provide: StructureAggregateRepository,
        useClass: InMemoryStructureAggregateRepository
    }
];
/** @type {?} */
export const inMemoryStructureReadProviders = [
    InMemoryStructureReadStore,
    {
        provide: StructureReadModelRepository,
        useClass: InMemoryStructureRepository
    }
];
/** @type {?} */
export const inMemoryStructureProviders = [
    InMemoryStructureStore
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5wcm92aWRlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zdHJ1Y3R1cmUucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUUvRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFckUsTUFBTSxPQUFPLGlDQUFpQyxHQUFHO0lBQ2hELCtCQUErQjtJQUMvQjtRQUNDLE9BQU8sRUFBRSw0QkFBNEI7UUFDckMsUUFBUSxFQUFFLG9DQUFvQztLQUM5QztDQUNEOztBQUVELE1BQU0sT0FBTyw4QkFBOEIsR0FBRztJQUM3QywwQkFBMEI7SUFDMUI7UUFDQyxPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLFFBQVEsRUFBRSwyQkFBMkI7S0FDckM7Q0FDRDs7QUFFRCxNQUFNLE9BQU8sMEJBQTBCLEdBQUc7SUFDekMsc0JBQXNCO0NBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4vZG9tYWluL2luLW1lbW9yeS5zdHJ1Y3R1cmUuYWdncmVnYXRlLXN0b3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9kb21haW4vaW4tbWVtb3J5LnN0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgfSBmcm9tICcuL2RvbWFpbi1hcGkvaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVJlcG9zaXRvcnkgfSBmcm9tICcuL2RvbWFpbi1hcGkvaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5zdHJ1Y3R1cmUuc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgaW5NZW1vcnlTdHJ1Y3R1cmVDb21tYW5kUHJvdmlkZXJzID0gW1xuXHRJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVN0b3JlLFxuXHR7XG5cdFx0cHJvdmlkZTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHR1c2VDbGFzczogSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5XG5cdH1cbl07XG5cbmV4cG9ydCBjb25zdCBpbk1lbW9yeVN0cnVjdHVyZVJlYWRQcm92aWRlcnMgPSBbXG5cdEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlLFxuXHR7XG5cdFx0cHJvdmlkZTogU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHR1c2VDbGFzczogSW5NZW1vcnlTdHJ1Y3R1cmVSZXBvc2l0b3J5XG5cdH1cbl07XG5cbmV4cG9ydCBjb25zdCBpbk1lbW9yeVN0cnVjdHVyZVByb3ZpZGVycyA9IFtcblx0SW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZVxuXTtcbiJdfQ==