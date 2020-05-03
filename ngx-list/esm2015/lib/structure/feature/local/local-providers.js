/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionCommandDispatcher } from '../../../composition/feature-api/composition.command-dispatcher';
import { StructurePagingCommandDispatcher } from '../../feature-api/paging/structure-paging.command-dispatcher';
import { LocalPagingCommandDispatcher } from './paging/local-paging.command-dispatcher';
import { LocalPagingWarehouse } from './paging/local-paging.warehouse';
import { StructureFormationDispatcher } from '../../feature-api/formation/structure-formation.dispatcher';
import { LocalFormationCommandDispatcher } from './formation/local-formation.command-dispatcher';
import { StructureFormationWarehouse } from '../../feature-api/formation/structure-formation.warehouse';
import { LocalFormationWarehouse } from './formation/local-formation.warehouse';
import { StructureCommandDispatcher } from '../../feature-api/structure.command-dispatcher';
import { LocalStructureCommandDispatcher } from './structure/local-structure.command-dispatcher';
import { StructureWarehouse } from '../../feature-api/structure.warehouse';
import { LocalStructureWarehouse } from './structure/local-structure.warehouse';
import { SourceCommandDispatcher } from '../../feature-api/source/source.command-dispatcher';
import { LocalSourceCommandDispatcher } from './source/local-source.command-dispatcher';
import { StructureSourceWarehouse } from '../../feature-api/source/structure-source.warehouse';
import { LocalSourceWarehouse } from './source/local-source.warehouse';
import { LocalCompositionCommandDispatcher } from './composition/local-composition.command-dispatcher';
import { CompositionWarehouse } from '../../../composition/feature-api/composition.warehouse';
import { LocalCompositionWarehouse } from './composition/local-composition.warehouse';
import { StructurePagingWarehouse } from '../../feature-api/paging/structure-paging.warehouse';
import { StructureSearchDispatcher } from '../../domain/structure/search/structure.search.dispatcher';
import { LocalStructureSearchCommandDispatcher } from './search/local-structure-search.command-dispatcher';
import { SchemaWarehouse } from '../../../schema/feature-api/schema.warehouse';
import { LocalSchemaWarehouse } from './schema/local-schema.warehouse';
import { SchemaCommandDispatcher } from '../../../schema/feature-api/schema.command-dispatcher';
import { LocalSchemaCommandDispatcher } from './schema/local-schema.command-dispatcher';
import { StructureVerticalFormationWarehouse } from '../../feature-api/vertical-formation/structure-vertical-formation.warehouse';
import { LocalStructureVerticalFormationWarehouse } from './vertical-formation/local-structure-vertical-formation.warehouse';
/** @type {?} */
export const localProviders = [
    { provide: StructurePagingCommandDispatcher, useClass: LocalPagingCommandDispatcher },
    { provide: StructurePagingWarehouse, useClass: LocalPagingWarehouse },
    { provide: StructureFormationDispatcher, useClass: LocalFormationCommandDispatcher },
    { provide: StructureFormationWarehouse, useClass: LocalFormationWarehouse },
    { provide: StructureCommandDispatcher, useClass: LocalStructureCommandDispatcher },
    { provide: StructureWarehouse, useClass: LocalStructureWarehouse },
    { provide: SourceCommandDispatcher, useClass: LocalSourceCommandDispatcher },
    { provide: StructureSourceWarehouse, useClass: LocalSourceWarehouse },
    { provide: CompositionCommandDispatcher, useClass: LocalCompositionCommandDispatcher },
    { provide: CompositionWarehouse, useClass: LocalCompositionWarehouse },
    { provide: StructureSearchDispatcher, useClass: LocalStructureSearchCommandDispatcher },
    { provide: StructureVerticalFormationWarehouse, useClass: LocalStructureVerticalFormationWarehouse },
    { provide: SchemaWarehouse, useClass: LocalSchemaWarehouse },
    { provide: SchemaCommandDispatcher, useClass: LocalSchemaCommandDispatcher }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvbG9jYWwvbG9jYWwtcHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN2RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM5RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN0RyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUUzRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDbEksT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7O0FBRTdILE1BQU0sT0FBTyxjQUFjLEdBQUc7SUFDN0IsRUFBRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFO0lBQ3JGLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtJQUNyRSxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsK0JBQStCLEVBQUU7SUFDcEYsRUFBRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFO0lBQzNFLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSwrQkFBK0IsRUFBRTtJQUNsRixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7SUFDbEUsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFO0lBQzVFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtJQUVyRSxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsaUNBQWlDLEVBQUU7SUFDdEYsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFO0lBRXRFLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxxQ0FBcUMsRUFBRTtJQUV2RixFQUFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxRQUFRLEVBQUUsd0NBQXdDLEVBQUU7SUFFcEcsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtJQUM1RCxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUU7Q0FDNUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IExvY2FsUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3BhZ2luZy9sb2NhbC1wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IExvY2FsUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi9wYWdpbmcvbG9jYWwtcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvZm9ybWF0aW9uL3N0cnVjdHVyZS1mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBMb2NhbEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlLWFwaS9mb3JtYXRpb24vc3RydWN0dXJlLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgTG9jYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBMb2NhbFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlLWFwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IExvY2FsU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IExvY2FsU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3NvdXJjZS9sb2NhbC1zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL3NvdXJjZS9zdHJ1Y3R1cmUtc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBMb2NhbFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4vc291cmNlL2xvY2FsLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgTG9jYWxDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9sb2NhbC1jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgTG9jYWxDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4vY29tcG9zaXRpb24vbG9jYWwtY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc3RydWN0dXJlLnNlYXJjaC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IExvY2FsU3RydWN0dXJlU2VhcmNoQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3NlYXJjaC9sb2NhbC1zdHJ1Y3R1cmUtc2VhcmNoLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5cbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlLWFwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IExvY2FsU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi9zY2hlbWEvbG9jYWwtc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlLWFwaS9zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IExvY2FsU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3NjaGVtYS9sb2NhbC1zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvdmVydGljYWwtZm9ybWF0aW9uL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IExvY2FsU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi9sb2NhbC1zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5cbmV4cG9ydCBjb25zdCBsb2NhbFByb3ZpZGVycyA9IFtcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciwgdXNlQ2xhc3M6IExvY2FsUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSxcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVQYWdpbmdXYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbFBhZ2luZ1dhcmVob3VzZSB9LFxuXHR7IHByb3ZpZGU6IFN0cnVjdHVyZUZvcm1hdGlvbkRpc3BhdGNoZXIsIHVzZUNsYXNzOiBMb2NhbEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0sXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlRm9ybWF0aW9uV2FyZWhvdXNlLCB1c2VDbGFzczogTG9jYWxGb3JtYXRpb25XYXJlaG91c2UgfSxcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciwgdXNlQ2xhc3M6IExvY2FsU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSxcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbFN0cnVjdHVyZVdhcmVob3VzZSB9LFxuXHR7IHByb3ZpZGU6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLCB1c2VDbGFzczogTG9jYWxTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9LFxuXHR7IHByb3ZpZGU6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsU291cmNlV2FyZWhvdXNlIH0sXG5cblx0eyBwcm92aWRlOiBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLCB1c2VDbGFzczogTG9jYWxDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0sXG5cdHsgcHJvdmlkZTogQ29tcG9zaXRpb25XYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbENvbXBvc2l0aW9uV2FyZWhvdXNlIH0sXG5cblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyLCB1c2VDbGFzczogTG9jYWxTdHJ1Y3R1cmVTZWFyY2hDb21tYW5kRGlzcGF0Y2hlciB9LFxuXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0sXG5cblx0eyBwcm92aWRlOiBTY2hlbWFXYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbFNjaGVtYVdhcmVob3VzZSB9LFxuXHR7IHByb3ZpZGU6IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLCB1c2VDbGFzczogTG9jYWxTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciB9XG5dO1xuIl19