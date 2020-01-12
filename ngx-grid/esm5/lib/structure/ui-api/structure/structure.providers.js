/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { COMMAND_HANDLERS, DOMAIN_EVENT_HANDLERS } from '@generic-ui/hermes';
import { inMemoryStructureCommandProviders, inMemoryStructureProviders, inMemoryStructureReadProviders } from '../../infrastructure/in-memory/structure/in-memory.structure.providers';
import { InitStructureCommandHandler } from '../../domain/structure/command/init/init-structure.command-handler';
import { SetVerticalScrollEnabledCommandHandler } from '../../domain/structure/command/vertical-formation/set-enabled/set-vertical-scroll-enabled.command-handler';
import { SetScrollPositionCommandHandler } from '../../domain/structure/command/vertical-formation/scroll-position/set-scroll-position.command-handler';
import { InitFieldsCommandHandler } from '../../domain/structure/command/field/init/init-fields.command-handler';
import { ToggleSortCommandHandler } from '../../domain/structure/command/sort/toggle/toggle-sort.command-handler';
import { SetSortingCommandHandler } from '../../domain/structure/command/sort/set-config/set-sorting.command-handler';
import { StructureSetConfigFilterCommandHandler } from '../../domain/structure/command/filter/config/structure.set-config-filter.command-handler';
import { StructureSetConfigSearchingCommandHandler } from '../../domain/structure/command/search/config/structure.set-config-searching.command-handler';
import { StructureSetConfigQuickFilterCommandHandler } from '../../domain/structure/command/filter/quick/structure.set-config-quick-filter.command-handler';
import { StructureToggleFilterCommandHandler } from '../../domain/structure/command/filter/toggle/structure.toggle-filter.command-handler';
import { StructureSetAggregationEnabledCommandHandler } from '../../domain/structure/command/aggregation/set/structure.set-aggregation-enabled.command-handler';
import { VerticalFormationFactory } from '../../domain/structure/command/vertical-formation/vertical-formation.factory';
import { FieldCollectionFactory } from '../../domain/structure/command/field/field-collection.factory';
import { FilterManagerFactory } from '../../domain/structure/command/filter/filter.manager-factory';
import { FieldIdGenerator } from '../../domain/structure/command/field/field-id.generator';
import { StructureFilterCommandService } from './filter/structure.filter.command.service';
import { FieldFactory } from '../../domain/structure/command/field/data-type/field.factory';
import { aggregationProviders } from '../../domain/structure/command/aggregation/aggregation.providers';
import { StructureConfigFilterSetEventHandler } from '../../domain/structure/read/filter/structure.config-filter-set.event-handler';
import { StructureConfigSearchingSetEventHandler } from '../../domain/structure/read/searching/structure.config-searching-set.event-handler';
import { StructureConfigQuickFilterSetEventHandler } from '../../domain/structure/read/filter/structure.config-quick-filter-set.event-handler';
import { StructureFieldsInitedEventHandler } from './field/structure.fields-inited.event-handler';
import { VerticalFormationConverter } from '../../domain/structure/read/vertical-formation/vertical-formation.converter';
import { StructureFilterReadModelRepository } from './filter/structure.filter.read-model.repository';
import { StructureFilterRepository } from '../../domain/structure/read/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../domain/structure/read/filter/structure.quick-filter.repository';
import { StructureSearchingRepository } from '../../domain/structure/read/searching/structure.searching.repository';
import { StructureSearchReadModelRepository } from './search/structure-search.read-model.repository';
import { StructureFieldUiArchive } from './field/structure.field.ui-archive';
import { StructureFieldUiConverter } from './field/structure.field.ui-converter';
import { StructureFieldUiRepository } from './field/structure.field.ui-repository';
import { StructureAggregationCommandService } from './aggregation/structure.aggregation.command-service';
import { StructureAggregationUiEventsRepository } from './aggregation/structure.aggregation.ui-events-repository';
import { StructureCommandService } from './structure-command.service';
import { StructureConverter } from '../../domain/structure/structure.converter';
import { StructureAggregateFactory } from '../../domain/structure/command/structure.aggregate-factory';
import { StructureReadModelService } from './structure-read-model.service';
import { pagingProviders } from '../paging/paging.providers';
import { schemaProviders } from '../schema/schema.providers';
import { formationProviders } from '../formation/formation.providers';
import { sourceProviders } from '../source/source.providers';
import { StructureSetSearchPhraseCommandHandler } from '../../domain/structure/command/search/set/structure.set-search-phrase.command-handler';
import { SearchManagerFactory } from '../../domain/structure/command/search/search.manager-factory';
import { SetSortOrderCommandHandler } from '../../domain/structure/command/sort/order/set-sort-order.command-handler';
/** @type {?} */
var commandProviders = tslib_1.__spread(inMemoryStructureCommandProviders, [
    {
        provide: COMMAND_HANDLERS,
        useClass: InitStructureCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetVerticalScrollEnabledCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetScrollPositionCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: InitFieldsCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: ToggleSortCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetSortingCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigSearchingCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigQuickFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureToggleFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetAggregationEnabledCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetSearchPhraseCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetSortOrderCommandHandler,
        multi: true
    },
    VerticalFormationFactory,
    FieldCollectionFactory,
    FilterManagerFactory,
    SearchManagerFactory,
    FieldIdGenerator,
    StructureFilterCommandService,
    FieldFactory
], aggregationProviders);
/** @type {?} */
var readProviders = tslib_1.__spread([
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigSearchingSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigQuickFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureFieldsInitedEventHandler,
        multi: true
    }
], inMemoryStructureReadProviders, [
    VerticalFormationConverter,
    StructureFilterReadModelRepository,
    StructureFilterRepository,
    StructureQuickFilterRepository,
    StructureSearchingRepository,
    StructureSearchReadModelRepository,
    StructureFieldUiArchive,
    StructureFieldUiConverter,
    StructureFieldUiRepository
]);
/** @type {?} */
export var structureProviders = tslib_1.__spread(inMemoryStructureProviders, commandProviders, readProviders, [
    StructureAggregationCommandService,
    StructureAggregationUiEventsRepository,
    StructureAggregateFactory,
    StructureConverter,
    StructureReadModelService,
    StructureCommandService
], pagingProviders, schemaProviders, formationProviders, sourceProviders);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RSxPQUFPLEVBQ04saUNBQWlDLEVBQ2pDLDBCQUEwQixFQUMxQiw4QkFBOEIsRUFDOUIsTUFBTSx3RUFBd0UsQ0FBQztBQUNoRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwyR0FBMkcsQ0FBQztBQUNuSyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1R0FBdUcsQ0FBQztBQUN4SixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwwRkFBMEYsQ0FBQztBQUNsSixPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw2RkFBNkYsQ0FBQztBQUN4SixPQUFPLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSwrRkFBK0YsQ0FBQztBQUM1SixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUMzSSxPQUFPLEVBQUUsNENBQTRDLEVBQUUsTUFBTSxrR0FBa0csQ0FBQztBQUNoSyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN2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OUIsUUFBUSxFQUFFLHlDQUF5QztRQUNuRCxLQUFLLEVBQUUsSUFBSTtLQUNYLEVBQUU7UUFDRixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFFBQVEsRUFBRSxpQ0FBaUM7UUFDM0MsS0FBSyxFQUFFLElBQUk7S0FDWDtHQUNFLDhCQUE4QjtJQUNqQywwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtFQUMxQjs7QUFFRCxNQUFNLEtBQU8sa0JBQWtCLG9CQUMzQiwwQkFBMEIsRUFFMUIsZ0JBQWdCLEVBQ2hCLGFBQWE7SUFFaEIsa0NBQWtDO0lBQ2xDLHNDQUFzQztJQUV0Qyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBRWxCLHlCQUF5QjtJQUN6Qix1QkFBdUI7R0FFcEIsZUFBZSxFQUNmLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsZUFBZSxDQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTU1BTkRfSEFORExFUlMsIERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQge1xuXHRpbk1lbW9yeVN0cnVjdHVyZUNvbW1hbmRQcm92aWRlcnMsXG5cdGluTWVtb3J5U3RydWN0dXJlUHJvdmlkZXJzLFxuXHRpbk1lbW9yeVN0cnVjdHVyZVJlYWRQcm92aWRlcnNcbn0gZnJvbSAnLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L3N0cnVjdHVyZS9pbi1tZW1vcnkuc3RydWN0dXJlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBJbml0U3RydWN0dXJlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvaW5pdC9pbml0LXN0cnVjdHVyZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBUb2dnbGVTb3J0Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC90b2dnbGUvdG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNvcnRpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3NldC1jb25maWcvc2V0LXNvcnRpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ0ZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9jb25maWcvc3RydWN0dXJlLnNldC1jb25maWctZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zZWFyY2gvY29uZmlnL3N0cnVjdHVyZS5zZXQtY29uZmlnLXNlYXJjaGluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvcXVpY2svc3RydWN0dXJlLnNldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvdG9nZ2xlL3N0cnVjdHVyZS50b2dnbGUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRBZ2dyZWdhdGlvbkVuYWJsZWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9zZXQvc3RydWN0dXJlLnNldC1hZ2dyZWdhdGlvbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IEZpbHRlck1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9maWx0ZXIubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZmllbGQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IGFnZ3JlZ2F0aW9uUHJvdmlkZXJzIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvZmlsdGVyL3N0cnVjdHVyZS5jb25maWctZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvc3RydWN0dXJlLmNvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvZmlsdGVyL3N0cnVjdHVyZS5jb25maWctcXVpY2stZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4vZmllbGQvc3RydWN0dXJlLmZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5yZWFkLW1vZGVsLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9maWx0ZXIvc3RydWN0dXJlLnF1aWNrLWZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc2VhcmNoaW5nL3N0cnVjdHVyZS5zZWFyY2hpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZWFyY2gvc3RydWN0dXJlLXNlYXJjaC5yZWFkLW1vZGVsLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaUFyY2hpdmUgfSBmcm9tICcuL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIgfSBmcm9tICcuL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnkgfSBmcm9tICcuL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25VaUV2ZW50c1JlcG9zaXRvcnkgfSBmcm9tICcuL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi51aS1ldmVudHMtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSB9IGZyb20gJy4vc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4vc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBwYWdpbmdQcm92aWRlcnMgfSBmcm9tICcuLi9wYWdpbmcvcGFnaW5nLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBzY2hlbWFQcm92aWRlcnMgfSBmcm9tICcuLi9zY2hlbWEvc2NoZW1hLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBmb3JtYXRpb25Qcm92aWRlcnMgfSBmcm9tICcuLi9mb3JtYXRpb24vZm9ybWF0aW9uLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBzb3VyY2VQcm92aWRlcnMgfSBmcm9tICcuLi9zb3VyY2Uvc291cmNlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zZWFyY2gvc2V0L3N0cnVjdHVyZS5zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VhcmNoTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc2VhcmNoL3NlYXJjaC5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU2V0U29ydE9yZGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC9vcmRlci9zZXQtc29ydC1vcmRlci5jb21tYW5kLWhhbmRsZXInO1xuXG5cbmNvbnN0IGNvbW1hbmRQcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlQ29tbWFuZFByb3ZpZGVycyxcblx0e1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IEluaXRTdHJ1Y3R1cmVDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IEluaXRGaWVsZHNDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogVG9nZ2xlU29ydENvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTZXRTb3J0aW5nQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZVNldENvbmZpZ0ZpbHRlckNvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU2V0U29ydE9yZGVyQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSxcblx0VmVydGljYWxGb3JtYXRpb25GYWN0b3J5LFxuXHRGaWVsZENvbGxlY3Rpb25GYWN0b3J5LFxuXHRGaWx0ZXJNYW5hZ2VyRmFjdG9yeSxcblx0U2VhcmNoTWFuYWdlckZhY3RvcnksXG5cdEZpZWxkSWRHZW5lcmF0b3IsXG5cdFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLFxuXHRGaWVsZEZhY3RvcnksXG5cblx0Li4uYWdncmVnYXRpb25Qcm92aWRlcnNcbl07XG5cbmNvbnN0IHJlYWRQcm92aWRlcnMgPSBbXG5cdHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlUmVhZFByb3ZpZGVycyxcblx0VmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIsXG5cdFN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlRmllbGRVaUFyY2hpdmUsXG5cdFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIsXG5cdFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5XG5dO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVByb3ZpZGVycyxcblxuXHQuLi5jb21tYW5kUHJvdmlkZXJzLFxuXHQuLi5yZWFkUHJvdmlkZXJzLFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5LFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFN0cnVjdHVyZUNvbnZlcnRlcixcblxuXHRTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlLFxuXHRTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSxcblxuXHQuLi5wYWdpbmdQcm92aWRlcnMsXG5cdC4uLnNjaGVtYVByb3ZpZGVycyxcblx0Li4uZm9ybWF0aW9uUHJvdmlkZXJzLFxuXHQuLi5zb3VyY2VQcm92aWRlcnNcbl07XG4iXX0=