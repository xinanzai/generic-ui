/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesModule } from '@generic-ui/hermes';
import { inMemoryStructureCommandProviders, inMemoryStructureProviders, inMemoryStructureReadProviders } from '../infrastructure/in-memory/in-memory.structure.providers';
import { SetVerticalScrollEnabledCommandHandler } from '../domain/structure/vertical-formation/set-enabled/set-vertical-scroll-enabled.command-handler';
import { SetScrollPositionCommandHandler } from '../domain/structure/vertical-formation/scroll-position/set-scroll-position.command-handler';
import { StructureSetSummariesEnabledCommandHandler } from '../domain/structure/summaries/set/structure.set-summaries-enabled.command-handler';
import { VerticalFormationFactory } from '../domain/structure/vertical-formation/vertical-formation.factory';
import { summariesProviders } from '../domain/structure/summaries/summaries.providers';
import { FieldsInitedEventHandler } from '../../../structure/field/domain-api/read/fields-inited.event-handler';
import { VerticalFormationConverter } from './vertical-formation/vertical-formation.converter';
import { StructureSummariesCommandDispatcher } from './summaries/structure-summaries.command-dispatcher';
import { StructureSummariesUiEventsRepository } from './summaries/structure-summaries.ui-events-repository';
import { StructureCommandDispatcher } from './structure.command-dispatcher';
import { StructureReadModelRootConverter } from './read/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../domain/structure/structure.aggregate-factory';
import { StructureWarehouse } from './structure.warehouse';
import { VerticalFormationRepository } from './vertical-formation/vertical-formation.repository';
import { SetRowHeightCommandHandler } from '../domain/structure/vertical-formation/set-row-height/set-row-height.command-handler';
import { StructureSetHeightCommandHandler } from '../domain/structure/vertical-formation/container/set-height/structure-set-height.command-handler';
import { SetRowHeightBasedOnThemeCommandHandler } from '../domain/structure/vertical-formation/set-row-height-theme/set-row-height-based-on-theme.command-handler';
import { StructureVerticalFormationWarehouse } from './vertical-formation/structure-vertical-formation.warehouse';
import { StructureSummariesWarehouse } from './summaries/structure-summaries.warehouse';
import { StructureSummariesRepository } from './summaries/enabled/structure.summaries.repository';
import { StructureCreatedEventHandler } from '../domain/structure/create-structure/structure-created.event-handler';
import { StructureSummariesEnabledSetEventHandler } from './summaries/enabled/structure.summaries-enabled-set.event-handler';
/** @type {?} */
const commandProviders = [
    ...inMemoryStructureCommandProviders,
    VerticalFormationFactory,
    ...summariesProviders
];
/** @type {?} */
const readProviders = [
    ...inMemoryStructureReadProviders,
    VerticalFormationConverter,
    VerticalFormationRepository,
    StructureSummariesRepository,
    StructureSummariesWarehouse
];
/** @type {?} */
export const structureCommandHandlers = [
    ...HermesModule.registerCommandHandler(SetVerticalScrollEnabledCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetRowHeightBasedOnThemeCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetScrollPositionCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetSummariesEnabledCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetRowHeightCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetHeightCommandHandler, 'StructureAggregate')
];
/** @type {?} */
export const structureDomainEventHandlers = [
    ...HermesModule.registerDomainEventHandler(StructureSummariesEnabledSetEventHandler),
    ...HermesModule.registerDomainEventHandler(StructureCreatedEventHandler),
    ...HermesModule.registerDomainEventHandler(FieldsInitedEventHandler)
];
/** @type {?} */
export const structureProviders = [
    ...inMemoryStructureProviders,
    ...commandProviders,
    ...readProviders,
    StructureSummariesCommandDispatcher,
    StructureSummariesUiEventsRepository,
    StructureAggregateFactory,
    StructureReadModelRootConverter,
    StructureVerticalFormationWarehouse,
    StructureWarehouse,
    StructureCommandDispatcher
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQ04saUNBQWlDLEVBQ2pDLDBCQUEwQixFQUMxQiw4QkFBOEIsRUFDOUIsTUFBTSwyREFBMkQsQ0FBQztBQUNuRSxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxnR0FBZ0csQ0FBQztBQUN4SixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0RkFBNEYsQ0FBQztBQUM3SSxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUMvSSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNoSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM1RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUNsSSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxrR0FBa0csQ0FBQztBQUNwSixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwyR0FBMkcsQ0FBQztBQUNuSyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQzs7TUFHdkgsZ0JBQWdCLEdBQUc7SUFDeEIsR0FBRyxpQ0FBaUM7SUFFcEMsd0JBQXdCO0lBRXhCLEdBQUcsa0JBQWtCO0NBQ3JCOztNQUVLLGFBQWEsR0FBRztJQUNyQixHQUFHLDhCQUE4QjtJQUNqQywwQkFBMEI7SUFDMUIsMkJBQTJCO0lBRTNCLDRCQUE0QjtJQUM1QiwyQkFBMkI7Q0FDM0I7O0FBRUQsTUFBTSxPQUFPLHdCQUF3QixHQUFHO0lBQ3ZDLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNDQUFzQyxFQUFFLG9CQUFvQixDQUFDO0lBQ3BHLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNDQUFzQyxFQUFFLG9CQUFvQixDQUFDO0lBQ3BHLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLCtCQUErQixFQUFFLG9CQUFvQixDQUFDO0lBQzdGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDBDQUEwQyxFQUFFLG9CQUFvQixDQUFDO0lBQ3hHLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixFQUFFLG9CQUFvQixDQUFDO0lBQ3hGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLGdDQUFnQyxFQUFFLG9CQUFvQixDQUFDO0NBQzlGOztBQUVELE1BQU0sT0FBTyw0QkFBNEIsR0FBRztJQUMzQyxHQUFHLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyx3Q0FBd0MsQ0FBQztJQUNwRixHQUFHLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyw0QkFBNEIsQ0FBQztJQUN4RSxHQUFHLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQztDQUNwRTs7QUFFRCxNQUFNLE9BQU8sa0JBQWtCLEdBQUc7SUFDakMsR0FBRywwQkFBMEI7SUFFN0IsR0FBRyxnQkFBZ0I7SUFDbkIsR0FBRyxhQUFhO0lBRWhCLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFFcEMseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUUvQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLDBCQUEwQjtDQUUxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQge1xuXHRpbk1lbW9yeVN0cnVjdHVyZUNvbW1hbmRQcm92aWRlcnMsXG5cdGluTWVtb3J5U3RydWN0dXJlUHJvdmlkZXJzLFxuXHRpbk1lbW9yeVN0cnVjdHVyZVJlYWRQcm92aWRlcnNcbn0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zdHJ1Y3R1cmUucHJvdmlkZXJzJztcbmltcG9ydCB7IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LWVuYWJsZWQvc2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldFN1bW1hcmllc0VuYWJsZWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NldC9zdHJ1Y3R1cmUuc2V0LXN1bW1hcmllcy1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBzdW1tYXJpZXNQcm92aWRlcnMgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9zdW1tYXJpZXMucHJvdmlkZXJzJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4tYXBpL3JlYWQvZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1VpRXZlbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4vc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMudWktZXZlbnRzLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdENvbnZlcnRlciB9IGZyb20gJy4vcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNldFJvd0hlaWdodENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvc2V0LXJvdy1oZWlnaHQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29udGFpbmVyL3NldC1oZWlnaHQvc3RydWN0dXJlLXNldC1oZWlnaHQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQtdGhlbWUvc2V0LXJvdy1oZWlnaHQtYmFzZWQtb24tdGhlbWUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzV2FyZWhvdXNlIH0gZnJvbSAnLi9zdW1tYXJpZXMvc3RydWN0dXJlLXN1bW1hcmllcy53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSB9IGZyb20gJy4vc3VtbWFyaWVzL2VuYWJsZWQvc3RydWN0dXJlLnN1bW1hcmllcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9zdW1tYXJpZXMvZW5hYmxlZC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWVuYWJsZWQtc2V0LmV2ZW50LWhhbmRsZXInO1xuXG5cbmNvbnN0IGNvbW1hbmRQcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlQ29tbWFuZFByb3ZpZGVycyxcblxuXHRWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnksXG5cblx0Li4uc3VtbWFyaWVzUHJvdmlkZXJzXG5dO1xuXG5jb25zdCByZWFkUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVJlYWRQcm92aWRlcnMsXG5cdFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyLFxuXHRWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnksXG5cblx0U3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlU3VtbWFyaWVzV2FyZWhvdXNlXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlQ29tbWFuZEhhbmRsZXJzID0gW1xuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVNldFN1bW1hcmllc0VuYWJsZWRDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRSb3dIZWlnaHRDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlRG9tYWluRXZlbnRIYW5kbGVycyA9IFtcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudEhhbmRsZXIpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU3RydWN0dXJlQ3JlYXRlZEV2ZW50SGFuZGxlciksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIpXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVByb3ZpZGVycyxcblxuXHQuLi5jb21tYW5kUHJvdmlkZXJzLFxuXHQuLi5yZWFkUHJvdmlkZXJzLFxuXG5cdFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyLFxuXHRTdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnksXG5cblx0U3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSxcblx0U3RydWN0dXJlUmVhZE1vZGVsUm9vdENvbnZlcnRlcixcblxuXHRTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0U3RydWN0dXJlV2FyZWhvdXNlLFxuXHRTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlclxuXG5dO1xuIl19