/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOMAIN_EVENT_HANDLERS, HermesModule } from '@generic-ui/hermes';
import { inMemoryStructureCommandProviders, inMemoryStructureProviders, inMemoryStructureReadProviders } from '../../infrastructure/in-memory/in-memory.structure.providers';
import { SetVerticalScrollEnabledCommandHandler } from '../../domain/structure/vertical-formation/set-enabled/set-vertical-scroll-enabled.command-handler';
import { SetScrollPositionCommandHandler } from '../../domain/structure/vertical-formation/scroll-position/set-scroll-position.command-handler';
import { InitFieldsCommandHandler } from '../../domain/structure/field/init/init-fields.command-handler';
import { ToggleSortCommandHandler } from '../../domain/structure/sort/toggle/toggle-sort.command-handler';
import { SetSortingCommandHandler } from '../../domain/structure/sort/set-config/set-sorting.command-handler';
import { StructureSetConfigFilterCommandHandler } from '../../domain/structure/filter/config/structure.set-config-filter.command-handler';
import { StructureSetConfigSearchingCommandHandler } from '../../domain/structure/search/config/structure.set-config-searching.command-handler';
import { StructureSetConfigQuickFilterCommandHandler } from '../../domain/structure/filter/quick/structure.set-config-quick-filter.command-handler';
import { StructureToggleFilterCommandHandler } from '../../domain/structure/filter/toggle/structure.toggle-filter.command-handler';
import { StructureSetAggregationEnabledCommandHandler } from '../../domain/structure/aggregation/set/structure.set-aggregation-enabled.command-handler';
import { VerticalFormationFactory } from '../../domain/structure/vertical-formation/vertical-formation.factory';
import { FieldCollectionFactory } from '../../domain/structure/field/field-collection.factory';
import { FilterManagerFactory } from '../../domain/structure/filter/filter.manager-factory';
import { FieldIdGenerator } from '../../domain/structure/field/field-id.generator';
import { StructureFilterCommandDispatcher } from './filter/structure-filter.command-dispatcher';
import { FieldFactory } from '../../domain/structure/field/data-type/field.factory';
import { aggregationProviders } from '../../domain/structure/aggregation/aggregation.providers';
import { StructureConfigFilterSetEventHandler } from '../../read/structure/filter/structure.config-filter-set.event-handler';
import { StructureConfigSearchingSetEventHandler } from '../../read/structure/searching/enabled/structure.config-searching-set.event-handler';
import { StructureConfigQuickFilterSetEventHandler } from '../../read/structure/filter/structure.config-quick-filter-set.event-handler';
import { StructureFieldsInitedEventHandler } from './field/structure.fields-inited.event-handler';
import { VerticalFormationConverter } from '../../read/structure/vertical-formation/vertical-formation.converter';
import { StructureFilterReadModelWarehouse } from './filter/structure-filter.read-model-warehouse';
import { StructureFilterRepository } from '../../read/structure/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../read/structure/filter/structure.quick-filter.repository';
import { StructureSearchingRepository } from '../../read/structure/searching/enabled/structure.searching.repository';
import { StructureSearchReadModelRepository } from './search/structure-search.read-model.repository';
import { StructureFieldUiArchive } from './field/structure.field.ui-archive';
import { StructureFieldUiConverter } from './field/structure.field.ui-converter';
import { StructureFieldUiRepository } from './field/structure.field.ui-repository';
import { StructureAggregationCommandDispatcher } from './aggregation/structure-aggregation.command-dispatcher';
import { StructureAggregationUiEventsRepository } from './aggregation/structure-aggregation.ui-events-repository';
import { StructureCommandDispatcher } from './structure.command-dispatcher';
import { StructureReadModelRootConverter } from '../../read/structure/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../../domain/structure/structure.aggregate-factory';
import { StructureReadModelWarehouse } from './structure.read-model-warehouse';
import { pagingProviders } from '../paging/paging.providers';
import { formationProviders } from '../formation/formation.providers';
import { sourceProviders } from '../source/source.providers';
import { StructureSetSearchPhraseCommandHandler } from '../../domain/structure/search/set-phrase/structure.set-search-phrase.command-handler';
import { SearchManagerFactory } from '../../domain/structure/search/search.manager-factory';
import { SetSortOrderCommandHandler } from '../../domain/structure/sort/order/set-sort-order.command-handler';
import { VerticalFormationRepository } from '../../read/structure/vertical-formation/vertical-formation.repository';
import { SetRowHeightCommandHandler } from '../../domain/structure/vertical-formation/set-row-height/set-row-height.command-handler';
import { StructureSearchPhraseRepository } from '../../read/structure/searching/phrase/structure.search-phrase.repository';
import { StructureSearchPhraseSetEventHandler } from '../../read/structure/searching/phrase/structure.search-phrase-set.event-handler';
import { StructureSearchDispatcher } from '../../domain/structure/search/structure.search.dispatcher';
import { StructureSearchEventService } from './search/structure-search-event.service';
import { StructureSearchHighlightArchive } from '../../read/structure/searching/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../read/structure/searching/placeholder/structure.search-placeholder.archive';
import { StructureSetHeightCommandHandler } from '../../domain/structure/vertical-formation/container/set-height/structure-set-height.command-handler';
import { SetRowHeightBasedOnThemeCommandHandler } from '../../domain/structure/vertical-formation/set-row-height-theme/set-row-height-based-on-theme.command-handler';
/** @type {?} */
const commandProviders = [
    ...inMemoryStructureCommandProviders,
    VerticalFormationFactory,
    FieldCollectionFactory,
    FilterManagerFactory,
    SearchManagerFactory,
    FieldIdGenerator,
    StructureFilterCommandDispatcher,
    FieldFactory,
    StructureSearchDispatcher,
    ...aggregationProviders
];
/** @type {?} */
const readProviders = [
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
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureSearchPhraseSetEventHandler,
        multi: true
    },
    ...inMemoryStructureReadProviders,
    VerticalFormationConverter,
    VerticalFormationRepository,
    StructureFilterReadModelWarehouse,
    StructureFilterRepository,
    StructureQuickFilterRepository,
    StructureSearchingRepository,
    StructureSearchReadModelRepository,
    StructureFieldUiArchive,
    StructureFieldUiConverter,
    StructureFieldUiRepository,
    StructureSearchPhraseRepository,
    StructureSearchHighlightArchive,
    StructureSearchPlaceholderArchive
];
/** @type {?} */
export const structureCommandHandlers = [
    ...HermesModule.registerCommandHandler(SetVerticalScrollEnabledCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetRowHeightBasedOnThemeCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetScrollPositionCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(InitFieldsCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(ToggleSortCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetSortingCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetConfigFilterCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetConfigSearchingCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetConfigQuickFilterCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureToggleFilterCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetAggregationEnabledCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetSearchPhraseCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetSortOrderCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(SetRowHeightCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(StructureSetHeightCommandHandler, 'StructureAggregate')
];
/** @type {?} */
export const structureProviders = [
    ...inMemoryStructureProviders,
    ...commandProviders,
    ...readProviders,
    StructureSearchEventService,
    StructureAggregationCommandDispatcher,
    StructureAggregationUiEventsRepository,
    StructureAggregateFactory,
    StructureReadModelRootConverter,
    StructureReadModelWarehouse,
    StructureCommandDispatcher,
    ...pagingProviders,
    ...formationProviders,
    ...sourceProviders
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RSxPQUFPLEVBQ04saUNBQWlDLEVBQ2pDLDBCQUEwQixFQUMxQiw4QkFBOEIsRUFDOUIsTUFBTSw4REFBOEQsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxtR0FBbUcsQ0FBQztBQUMzSixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwrRkFBK0YsQ0FBQztBQUNoSixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMxRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM5RyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUMxSSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxxRkFBcUYsQ0FBQztBQUNoSixPQUFPLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUNwSixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUNuSSxPQUFPLEVBQUUsNENBQTRDLEVBQUUsTUFBTSwwRkFBMEYsQ0FBQztBQUN4SixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNoSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM1RixP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QWU7Q0FDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQge1xuXHRpbk1lbW9yeVN0cnVjdHVyZUNvbW1hbmRQcm92aWRlcnMsXG5cdGluTWVtb3J5U3RydWN0dXJlUHJvdmlkZXJzLFxuXHRpbk1lbW9yeVN0cnVjdHVyZVJlYWRQcm92aWRlcnNcbn0gZnJvbSAnLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zdHJ1Y3R1cmUucHJvdmlkZXJzJztcbmltcG9ydCB7IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LWVuYWJsZWQvc2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvaW5pdC9pbml0LWZpZWxkcy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVG9nZ2xlU29ydENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zb3J0L3RvZ2dsZS90b2dnbGUtc29ydC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U29ydGluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zb3J0L3NldC1jb25maWcvc2V0LXNvcnRpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ0ZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvY29uZmlnL3N0cnVjdHVyZS5zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3NlYXJjaC9jb25maWcvc3RydWN0dXJlLnNldC1jb25maWctc2VhcmNoaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvcXVpY2svc3RydWN0dXJlLnNldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvZmlsdGVyL3RvZ2dsZS9zdHJ1Y3R1cmUudG9nZ2xlLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0QWdncmVnYXRpb25FbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL3NldC9zdHJ1Y3R1cmUuc2V0LWFnZ3JlZ2F0aW9uLWVuYWJsZWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2ZpZWxkLWNvbGxlY3Rpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvZmlsdGVyL2ZpbHRlci5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZmllbGQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlckNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9maWx0ZXIvc3RydWN0dXJlLWZpbHRlci5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBhZ2dyZWdhdGlvblByb3ZpZGVycyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vYWdncmVnYXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS9zZWFyY2hpbmcvZW5hYmxlZC9zdHJ1Y3R1cmUuY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuL2ZpZWxkL3N0cnVjdHVyZS5maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxXYXJlaG91c2UgfSBmcm9tICcuL2ZpbHRlci9zdHJ1Y3R1cmUtZmlsdGVyLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUucXVpY2stZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL3NlYXJjaGluZy9lbmFibGVkL3N0cnVjdHVyZS5zZWFyY2hpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZWFyY2gvc3RydWN0dXJlLXNlYXJjaC5yZWFkLW1vZGVsLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaUFyY2hpdmUgfSBmcm9tICcuL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIgfSBmcm9tICcuL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnkgfSBmcm9tICcuL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS1hZ2dyZWdhdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25VaUV2ZW50c1JlcG9zaXRvcnkgfSBmcm9tICcuL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS1hZ2dyZWdhdGlvbi51aS1ldmVudHMtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IHBhZ2luZ1Byb3ZpZGVycyB9IGZyb20gJy4uL3BhZ2luZy9wYWdpbmcucHJvdmlkZXJzJztcbmltcG9ydCB7IGZvcm1hdGlvblByb3ZpZGVycyB9IGZyb20gJy4uL2Zvcm1hdGlvbi9mb3JtYXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IHNvdXJjZVByb3ZpZGVycyB9IGZyb20gJy4uL3NvdXJjZS9zb3VyY2UucHJvdmlkZXJzJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBTZXRTb3J0T3JkZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc29ydC9vcmRlci9zZXQtc29ydC1vcmRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNldFJvd0hlaWdodENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvc2V0LXJvdy1oZWlnaHQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS9zZWFyY2hpbmcvcGhyYXNlL3N0cnVjdHVyZS5zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL3BocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc3RydWN0dXJlLnNlYXJjaC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaEV2ZW50U2VydmljZSB9IGZyb20gJy4vc2VhcmNoL3N0cnVjdHVyZS1zZWFyY2gtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL2hpZ2hsaWdodC9zdHJ1Y3R1cmUuc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL3NlYXJjaGluZy9wbGFjZWhvbGRlci9zdHJ1Y3R1cmUuc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtc2V0LWhlaWdodC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtcm93LWhlaWdodC10aGVtZS9zZXQtcm93LWhlaWdodC1iYXNlZC1vbi10aGVtZS5jb21tYW5kLWhhbmRsZXInO1xuXG5cbmNvbnN0IGNvbW1hbmRQcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlQ29tbWFuZFByb3ZpZGVycyxcblx0VmVydGljYWxGb3JtYXRpb25GYWN0b3J5LFxuXHRGaWVsZENvbGxlY3Rpb25GYWN0b3J5LFxuXHRGaWx0ZXJNYW5hZ2VyRmFjdG9yeSxcblx0U2VhcmNoTWFuYWdlckZhY3RvcnksXG5cdEZpZWxkSWRHZW5lcmF0b3IsXG5cdFN0cnVjdHVyZUZpbHRlckNvbW1hbmREaXNwYXRjaGVyLFxuXHRGaWVsZEZhY3RvcnksXG5cdFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIsXG5cblx0Li4uYWdncmVnYXRpb25Qcm92aWRlcnNcbl07XG5cbmNvbnN0IHJlYWRQcm92aWRlcnMgPSBbXG5cdHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldEV2ZW50SGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVJlYWRQcm92aWRlcnMsXG5cdFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyLFxuXHRWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFdhcmVob3VzZSxcblx0U3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5LFxuXHRTdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5LFxuXHRTdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSxcblx0U3RydWN0dXJlRmllbGRVaUNvbnZlcnRlcixcblx0U3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsXG5cdFN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZVxuXTtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdHVyZUNvbW1hbmRIYW5kbGVycyA9IFtcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihJbml0RmllbGRzQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoVG9nZ2xlU29ydENvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNvcnRpbmdDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNvcnRPcmRlckNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFJvd0hlaWdodENvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJylcbl07XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3R1cmVQcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlUHJvdmlkZXJzLFxuXG5cdC4uLmNvbW1hbmRQcm92aWRlcnMsXG5cdC4uLnJlYWRQcm92aWRlcnMsXG5cblx0U3RydWN0dXJlU2VhcmNoRXZlbnRTZXJ2aWNlLFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZERpc3BhdGNoZXIsXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5LFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIsXG5cblx0U3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlLFxuXHRTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblxuXHQuLi5wYWdpbmdQcm92aWRlcnMsXG5cdC4uLmZvcm1hdGlvblByb3ZpZGVycyxcblx0Li4uc291cmNlUHJvdmlkZXJzXG5dO1xuIl19