/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { COMMAND_HANDLERS, DOMAIN_EVENT_HANDLERS } from '@generic-ui/hermes';
import { inMemoryCompositionCommandProviders, inMemoryCompositionProviders, inMemoryCompositionQueryProviders } from '../../../infrastructure/in-memory/composition/in-memory.composition.providers';
import { CompositionAggregateFactory } from '../../../domain/composition/command/composition.aggregate-factory';
import { CompositionDispatcher } from '../../../domain/composition/command/composition.dispatcher';
import { InitCompositionCommandHandler } from '../../../domain/composition/command/init/init-composition.command-handler';
import { SetColumnsCommandHandler } from '../../../domain/composition/command/column/set-columns/set-columns.command-handler';
import { SetCompositionWidthCommandHandler } from '../../../domain/composition/command/width/set-width/set-composition-width.command-handler';
import { SetCompositionResizeWidthCommandHandler } from '../../../domain/composition/command/width/resize-width/set-composition-resize-width.command-handler';
import { SetCompositionContainerWidthCommandHandler } from '../../../domain/composition/command/width/set-container-width/set-composition-container-width.command-handler';
import { CompositionChangeSortStatusCommandHandler } from '../../../domain/composition/command/sort/composition-change-sort-status.command-handler';
import { ColumnEntityFactory } from '../../../domain/composition/command/column/column-entity.factory';
import { CompositionEventConverter } from '../../../domain/composition/command/composition-event.converter';
import { ColumnFieldFactory } from '../../../domain/composition/command/column/field/colum-field.factory';
import { CompositionEventService } from './composition.event-service';
import { CompositionQueryService } from './composition.query-service';
import { CompositionCommandService } from './composition.command-service';
import { CompositionConverter } from '../../../domain/composition/composition.converter';
import { EditTemplateRepository } from '../../../domain/composition/query/edit/edit-template.repository';
import { EditTemplateFactory } from '../../../domain/composition/query/edit/edit-template.factory';
import { ViewTemplateFactory } from '../../../domain/composition/query/view/view-template.factory';
import { ViewTemplateRepository } from '../../../domain/composition/query/view/view-template.repository';
import { ColumnDefinitionFactory } from '../../../domain/composition/query/definition/column-definition.factory';
import { CompositionChangeSortStatusEventHandler } from '../../../domain/composition/command/sort/composition-change-sort-status.event-handler';
import { CompositionFieldsInitedEventHandler } from '../../../domain/composition/command/column/set-columns/composition-fields-inited.event-handler';
/** @type {?} */
const commandProviders = [
    ...inMemoryCompositionCommandProviders,
    CompositionDispatcher,
    CompositionAggregateFactory,
    {
        provide: COMMAND_HANDLERS,
        useClass: InitCompositionCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: SetColumnsCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetCompositionWidthCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetCompositionResizeWidthCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetCompositionContainerWidthCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: CompositionChangeSortStatusCommandHandler,
        multi: true
    },
    ColumnEntityFactory,
    CompositionEventConverter,
    ColumnFieldFactory
];
/** @type {?} */
const queryProviders = [
    ...inMemoryCompositionQueryProviders,
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: CompositionFieldsInitedEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: CompositionChangeSortStatusEventHandler,
        multi: true
    },
    ColumnDefinitionFactory,
    ViewTemplateRepository,
    ViewTemplateFactory,
    EditTemplateFactory,
    EditTemplateRepository
];
/** @type {?} */
export const compositionProviders = [
    ...inMemoryCompositionProviders,
    ...commandProviders,
    ...queryProviders,
    CompositionConverter,
    CompositionCommandService,
    CompositionQueryService,
    CompositionEventService
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2FwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFDTixtQ0FBbUMsRUFBRSw0QkFBNEIsRUFDakUsaUNBQWlDLEVBQ2pDLE1BQU0sK0VBQStFLENBQUM7QUFDdkYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDaEgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbkcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDMUgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDOUgsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFDOUksT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0scUdBQXFHLENBQUM7QUFDOUosT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sK0dBQStHLENBQUM7QUFDM0ssT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFDcEosT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDdkcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDMUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDekcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDbkcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDbkcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDekcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDakgsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDaEosT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0dBQWdHLENBQUM7O01BRy9JLGdCQUFnQixHQUFHO0lBQ3hCLEdBQUcsbUNBQW1DO0lBQ3RDLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0I7UUFDQyxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsS0FBSyxFQUFFLElBQUk7S0FDWDtJQUNEO1FBQ0MsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLEtBQUssRUFBRSxJQUFJO0tBQ1gsRUFBRTtRQUNGLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLGlDQUFpQztRQUMzQyxLQUFLLEVBQUUsSUFBSTtLQUNYLEVBQUU7UUFDRixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSx1Q0FBdUM7UUFDakQsS0FBSyxFQUFFLElBQUk7S0FDWCxFQUFFO1FBQ0YsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsMENBQTBDO1FBQ3BELEtBQUssRUFBRSxJQUFJO0tBQ1gsRUFBRTtRQUNGLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLHlDQUF5QztRQUNuRCxLQUFLLEVBQUUsSUFBSTtLQUNYO0lBQ0QsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7Q0FDbEI7O01BRUssY0FBYyxHQUFHO0lBQ3RCLEdBQUcsaUNBQWlDO0lBQ3BDO1FBQ0MsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsbUNBQW1DO1FBQzdDLEtBQUssRUFBRSxJQUFJO0tBQ1gsRUFBRztRQUNILE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsUUFBUSxFQUFFLHVDQUF1QztRQUNqRCxLQUFLLEVBQUUsSUFBSTtLQUNYO0lBQ0QsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtDQUN0Qjs7QUFFRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUc7SUFDbkMsR0FBRyw0QkFBNEI7SUFDL0IsR0FBRyxnQkFBZ0I7SUFDbkIsR0FBRyxjQUFjO0lBRWpCLG9CQUFvQjtJQUVwQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtDQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTU1BTkRfSEFORExFUlMsIERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQge1xuXHRpbk1lbW9yeUNvbXBvc2l0aW9uQ29tbWFuZFByb3ZpZGVycywgaW5NZW1vcnlDb21wb3NpdGlvblByb3ZpZGVycyxcblx0aW5NZW1vcnlDb21wb3NpdGlvblF1ZXJ5UHJvdmlkZXJzXG59IGZyb20gJy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21wb3NpdGlvbi9pbi1tZW1vcnkuY29tcG9zaXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgSW5pdENvbXBvc2l0aW9uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9pbml0L2luaXQtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldENvbHVtbnNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zZXQtY29sdW1ucy9zZXQtY29sdW1ucy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvd2lkdGgvc2V0LXdpZHRoL3NldC1jb21wb3NpdGlvbi13aWR0aC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvd2lkdGgvcmVzaXplLXdpZHRoL3NldC1jb21wb3NpdGlvbi1yZXNpemUtd2lkdGguY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvc2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLWV2ZW50LmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4vY29tcG9zaXRpb24uZXZlbnQtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblF1ZXJ5U2VydmljZSB9IGZyb20gJy4vY29tcG9zaXRpb24ucXVlcnktc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tcG9zaXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9lZGl0L2VkaXQtdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L3ZpZXcvdmlldy10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25GaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24tZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyJztcblxuXG5jb25zdCBjb21tYW5kUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeUNvbXBvc2l0aW9uQ29tbWFuZFByb3ZpZGVycyxcblx0Q29tcG9zaXRpb25EaXNwYXRjaGVyLFxuXHRDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnksXG5cdHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBJbml0Q29tcG9zaXRpb25Db21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU2V0Q29sdW1uc0NvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHRDb2x1bW5FbnRpdHlGYWN0b3J5LFxuXHRDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyLFxuXHRDb2x1bW5GaWVsZEZhY3Rvcnlcbl07XG5cbmNvbnN0IHF1ZXJ5UHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeUNvbXBvc2l0aW9uUXVlcnlQcm92aWRlcnMsXG5cdHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IENvbXBvc2l0aW9uRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIFx0e1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sXG5cdENvbHVtbkRlZmluaXRpb25GYWN0b3J5LFxuXHRWaWV3VGVtcGxhdGVSZXBvc2l0b3J5LFxuXHRWaWV3VGVtcGxhdGVGYWN0b3J5LFxuXHRFZGl0VGVtcGxhdGVGYWN0b3J5LFxuXHRFZGl0VGVtcGxhdGVSZXBvc2l0b3J5XG5dO1xuXG5leHBvcnQgY29uc3QgY29tcG9zaXRpb25Qcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5Q29tcG9zaXRpb25Qcm92aWRlcnMsXG5cdC4uLmNvbW1hbmRQcm92aWRlcnMsXG5cdC4uLnF1ZXJ5UHJvdmlkZXJzLFxuXG5cdENvbXBvc2l0aW9uQ29udmVydGVyLFxuXG5cdENvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdENvbXBvc2l0aW9uUXVlcnlTZXJ2aWNlLFxuXHRDb21wb3NpdGlvbkV2ZW50U2VydmljZVxuXTtcbiJdfQ==