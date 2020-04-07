/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionCommandDispatcher } from '../../../composition/ui-api/composition.command-dispatcher';
import { StructurePagingCommandDispatcher } from '../../ui-api/paging/structure-paging.command-dispatcher';
import { LocalPagingCommandDispatcher } from './paging/local-paging.command-dispatcher';
import { LocalPagingReadModelWarehouse } from './paging/local-paging.read-model-warehouse';
import { FormationCommandService } from '../../ui-api/formation/formation-command.service';
import { LocalFormationCommandDispatcher } from './formation/local-formation.command-dispatcher';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
import { LocalFormationReadModelWarehouse } from './formation/local-formation.read-model-warehouse';
import { StructureCommandDispatcher } from '../../ui-api/structure/structure.command-dispatcher';
import { LocalStructureCommandDispatcher } from './structure/local-structure.command-dispatcher';
import { StructureReadModelWarehouse } from '../../ui-api/structure/structure.read-model-warehouse';
import { LocalStructureReadModelWarehouse } from './structure/local-structure.read-model-warehouse';
import { SourceCommandDispatcher } from '../../ui-api/source/source.command-dispatcher';
import { LocalSourceCommandDispatcher } from './source/local-source.command-dispatcher';
import { StructureSourceReadModelWarehouse } from '../../ui-api/source/structure-source.read-model-warehouse';
import { LocalSourceReadModelWarehouse } from './source/local-source.read-model-warehouse';
import { LocalCompositionCommandDispatcher } from './composition/local-composition.command-dispatcher';
import { CompositionReadModelWarehouse } from '../../../composition/ui-api/composition.read-model-warehouse';
import { LocalCompositionReadModelWarehouse } from './composition/local-composition.read-model-warehouse';
import { StructurePagingReadModelWarehouse } from '../../ui-api/paging/structure-paging.read-model-warehouse';
import { StructureSearchDispatcher } from '../../domain/structure/search/structure.search.dispatcher';
import { LocalStructureSearchCommandDispatcher } from './search/local-structure-search.command-dispatcher';
import { SchemaReadModelWarehouse } from '../../../schema/ui-api/schema.read-model-warehouse';
import { LocalSchemaReadModelWarehouse } from './schema/local-schema.read-model-warehouse';
import { SchemaCommandDispatcher } from '../../../schema/ui-api/schema.command-dispatcher';
import { LocalSchemaCommandDispatcher } from './schema/local-schema.command-dispatcher';
/** @type {?} */
export var localProviders = [
    { provide: StructurePagingCommandDispatcher, useClass: LocalPagingCommandDispatcher },
    { provide: StructurePagingReadModelWarehouse, useClass: LocalPagingReadModelWarehouse },
    { provide: FormationCommandService, useClass: LocalFormationCommandDispatcher },
    { provide: FormationReadModelService, useClass: LocalFormationReadModelWarehouse },
    { provide: StructureCommandDispatcher, useClass: LocalStructureCommandDispatcher },
    { provide: StructureReadModelWarehouse, useClass: LocalStructureReadModelWarehouse },
    { provide: SourceCommandDispatcher, useClass: LocalSourceCommandDispatcher },
    { provide: StructureSourceReadModelWarehouse, useClass: LocalSourceReadModelWarehouse },
    { provide: CompositionCommandDispatcher, useClass: LocalCompositionCommandDispatcher },
    { provide: CompositionReadModelWarehouse, useClass: LocalCompositionReadModelWarehouse },
    { provide: StructureSearchDispatcher, useClass: LocalStructureSearchCommandDispatcher },
    { provide: SchemaReadModelWarehouse, useClass: LocalSchemaReadModelWarehouse },
    { provide: SchemaCommandDispatcher, useClass: LocalSchemaCommandDispatcher }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2xvY2FsLXByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDMUcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDaEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDOUcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdkcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDN0csT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDMUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDOUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDdEcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFM0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBRXhGLE1BQU0sS0FBTyxjQUFjLEdBQUc7SUFDN0IsRUFBRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFO0lBQ3JGLEVBQUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLFFBQVEsRUFBRSw2QkFBNkIsRUFBRTtJQUN2RixFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsK0JBQStCLEVBQUU7SUFDL0UsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLGdDQUFnQyxFQUFFO0lBQ2xGLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSwrQkFBK0IsRUFBRTtJQUNsRixFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsZ0NBQWdDLEVBQUU7SUFDcEYsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFO0lBQzVFLEVBQUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLFFBQVEsRUFBRSw2QkFBNkIsRUFBRTtJQUV2RixFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsaUNBQWlDLEVBQUU7SUFDdEYsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxFQUFFLGtDQUFrQyxFQUFFO0lBRXhGLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxxQ0FBcUMsRUFBRTtJQUV2RixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsNkJBQTZCLEVBQUU7SUFDOUUsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFO0NBQzVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi91aS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IExvY2FsUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3BhZ2luZy9sb2NhbC1wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IExvY2FsUGFnaW5nUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi9wYWdpbmcvbG9jYWwtcGFnaW5nLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2FsRm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IEZvcm1hdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYWxGb3JtYXRpb25SZWFkTW9kZWxXYXJlaG91c2UgfSBmcm9tICcuL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24ucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgTG9jYWxTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc3RydWN0dXJlL2xvY2FsLXN0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgTG9jYWxTdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2UgfSBmcm9tICcuL3N0cnVjdHVyZS9sb2NhbC1zdHJ1Y3R1cmUucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi91aS1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgTG9jYWxTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc291cmNlL2xvY2FsLXNvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9zdHJ1Y3R1cmUtc291cmNlLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IExvY2FsU291cmNlUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi9zb3VyY2UvbG9jYWwtc291cmNlLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IExvY2FsQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vY29tcG9zaXRpb24vbG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IExvY2FsQ29tcG9zaXRpb25SZWFkTW9kZWxXYXJlaG91c2UgfSBmcm9tICcuL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ1JlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5yZWFkLW1vZGVsLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc3RydWN0dXJlLnNlYXJjaC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IExvY2FsU3RydWN0dXJlU2VhcmNoQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3NlYXJjaC9sb2NhbC1zdHJ1Y3R1cmUtc2VhcmNoLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS91aS1hcGkvc2NoZW1hLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IExvY2FsU2NoZW1hUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi9zY2hlbWEvbG9jYWwtc2NoZW1hLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL3VpLWFwaS9zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IExvY2FsU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3NjaGVtYS9sb2NhbC1zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuZXhwb3J0IGNvbnN0IGxvY2FsUHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IFN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLCB1c2VDbGFzczogTG9jYWxQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9LFxuXHR7IHByb3ZpZGU6IFN0cnVjdHVyZVBhZ2luZ1JlYWRNb2RlbFdhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsUGFnaW5nUmVhZE1vZGVsV2FyZWhvdXNlIH0sXG5cdHsgcHJvdmlkZTogRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UsIHVzZUNsYXNzOiBMb2NhbEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0sXG5cdHsgcHJvdmlkZTogRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSwgdXNlQ2xhc3M6IExvY2FsRm9ybWF0aW9uUmVhZE1vZGVsV2FyZWhvdXNlIH0sXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsIHVzZUNsYXNzOiBMb2NhbFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0sXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlLCB1c2VDbGFzczogTG9jYWxTdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2UgfSxcblx0eyBwcm92aWRlOiBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciwgdXNlQ2xhc3M6IExvY2FsU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSxcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVTb3VyY2VSZWFkTW9kZWxXYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbFNvdXJjZVJlYWRNb2RlbFdhcmVob3VzZSB9LFxuXG5cdHsgcHJvdmlkZTogQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciwgdXNlQ2xhc3M6IExvY2FsQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9LFxuXHR7IHByb3ZpZGU6IENvbXBvc2l0aW9uUmVhZE1vZGVsV2FyZWhvdXNlLCB1c2VDbGFzczogTG9jYWxDb21wb3NpdGlvblJlYWRNb2RlbFdhcmVob3VzZSB9LFxuXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlU2VhcmNoRGlzcGF0Y2hlciwgdXNlQ2xhc3M6IExvY2FsU3RydWN0dXJlU2VhcmNoQ29tbWFuZERpc3BhdGNoZXIgfSxcblxuXHR7IHByb3ZpZGU6IFNjaGVtYVJlYWRNb2RlbFdhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsU2NoZW1hUmVhZE1vZGVsV2FyZWhvdXNlIH0sXG5cdHsgcHJvdmlkZTogU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIsIHVzZUNsYXNzOiBMb2NhbFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIH1cbl07XG4iXX0=