/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SourceSetLoadingCommandHandler } from './loading/source-set-loading.command-handler';
import { SetOriginCommandHandler } from './origin/set-origin/set-origin.command-handler';
import { StructureEditSourceItemCommandHandler } from './origin/edit/structure.edit-source-item.command-handler';
import { SourceDispatcher } from './source.dispatcher';
import { SourceManagerFactory } from './core/source.manager-factory';
import { StructureOriginChangedEventHandler } from '../domain-api/origin/structure.origin-changed.event-handler';
import { StructurePreparedItemsEventHandler } from '../domain-api/prepared/structure.prepared-items.event-handler';
import { SourceDomainEventPublisher } from './source.domain-event.publisher';
import { SetEnabledSelectionCommandHandler } from './formation/set-enabled/set-enabled-selection.command-handler';
import { ToggleSelectedRowCommandHandler } from './formation/toggle/toggle-selected-row.command-handler';
import { FormationDispatcher } from './formation/formation.dispatcher';
import { FormationManagerFactory } from './formation/core/formation.manager-factory';
import { SelectedRowChangedEventHandler } from '../domain-api/formation/row-selected/selected-row-changed.event-handler';
import { SetSelectionModeCommandHandler } from './formation/mode/set-selection-mode.command-handler';
import { SelectAllRowsCommandHandler } from './formation/select-all/select-all-rows.command-handler';
import { UnselectAllRowsCommandHandler } from './formation/unselect-all/unselect-all-rows.command-handler';
import { SelectionModeSetEventHandler } from '../domain-api/formation/mode/selection-mode-set.event-handler';
import { DeleteOriginItemCommandHandler } from './origin/delete/delete-origin-item.command-handler';
var SourceDomainModule = /** @class */ (function (_super) {
    tslib_1.__extends(SourceDomainModule, _super);
    function SourceDomainModule() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    SourceDomainModule.commandHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerCommandHandler(SourceSetLoadingCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetOriginCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureEditSourceItemCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetEnabledSelectionCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetSelectionModeCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SelectAllRowsCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(UnselectAllRowsCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(DeleteOriginItemCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(ToggleSelectedRowCommandHandler, 'StructureAggregate'));
    };
    /**
     * @return {?}
     */
    SourceDomainModule.domainEventHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerDomainEventHandler(StructureOriginChangedEventHandler), HermesModule.registerDomainEventHandler(SelectedRowChangedEventHandler), HermesModule.registerDomainEventHandler(SelectionModeSetEventHandler), HermesModule.registerDomainEventHandler(StructurePreparedItemsEventHandler));
    };
    SourceDomainModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        SourceDispatcher,
                        SourceManagerFactory,
                        SourceDomainEventPublisher,
                        FormationDispatcher,
                        FormationManagerFactory
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    /** @nocollapse */
    SourceDomainModule.ctorParameters = function () { return []; };
    return SourceDomainModule;
}(DomainModule));
export { SourceDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL3NvdXJjZS5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNqSCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNuSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNsSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUdwRztJQWV3Qyw4Q0FBWTtJQUVuRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQUVNLGtDQUFlOzs7SUFBdEI7UUFDQyx3QkFDSSxZQUFZLENBQUMsc0JBQXNCLENBQUMsOEJBQThCLEVBQUUsb0JBQW9CLENBQUMsRUFDekYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDLEVBQ2xGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxxQ0FBcUMsRUFBRSxvQkFBb0IsQ0FBQyxFQUNoRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsaUNBQWlDLEVBQUUsb0JBQW9CLENBQUMsRUFDNUYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDhCQUE4QixFQUFFLG9CQUFvQixDQUFDLEVBQ3pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywyQkFBMkIsRUFBRSxvQkFBb0IsQ0FBQyxFQUN0RixZQUFZLENBQUMsc0JBQXNCLENBQUMsNkJBQTZCLEVBQUUsb0JBQW9CLENBQUMsRUFDeEYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDhCQUE4QixFQUFFLG9CQUFvQixDQUFDLEVBQ3pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywrQkFBK0IsRUFBRSxvQkFBb0IsQ0FBQyxFQUM1RjtJQUNILENBQUM7Ozs7SUFFTSxzQ0FBbUI7OztJQUExQjtRQUNDLHdCQUNJLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUMzRSxZQUFZLENBQUMsMEJBQTBCLENBQUMsOEJBQThCLENBQUMsRUFDdkUsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDRCQUE0QixDQUFDLEVBQ3JFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUM3RTtJQUNILENBQUM7O2dCQTFDRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQiwwQkFBMEI7d0JBRTFCLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3FCQUN2QjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7Ozs7SUE4QkQseUJBQUM7Q0FBQSxBQTVDRCxDQWV3QyxZQUFZLEdBNkJuRDtTQTdCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2xvYWRpbmcvc291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRPcmlnaW5Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL3NldC1vcmlnaW4vc2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9jb3JlL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi1hcGkvb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4tYXBpL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi9zb3VyY2UuZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZXQtZW5hYmxlZC1zZWxlY3Rpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi90b2dnbGUvdG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9mb3JtYXRpb24vY29yZS9mb3JtYXRpb24ubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3Jvdy1zZWxlY3RlZC9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNlbGVjdGlvbk1vZGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vZm9ybWF0aW9uL21vZGUvc2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZWxlY3RBbGxSb3dzQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwtcm93cy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVW5zZWxlY3RBbGxSb3dzQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi91bnNlbGVjdC1hbGwvdW5zZWxlY3QtYWxsLXJvd3MuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4tYXBpL2Zvcm1hdGlvbi9tb2RlL3NlbGVjdGlvbi1tb2RlLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL2RlbGV0ZS9kZWxldGUtb3JpZ2luLWl0ZW0uY29tbWFuZC1oYW5kbGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0U291cmNlTWFuYWdlckZhY3RvcnksXG5cdFx0U291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cblx0XHRGb3JtYXRpb25EaXNwYXRjaGVyLFxuXHRcdEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZURvbWFpbk1vZHVsZSBleHRlbmRzIERvbWFpbk1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNvdXJjZVNldExvYWRpbmdDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0T3JpZ2luQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZWxlY3RBbGxSb3dzQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFVuc2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihEZWxldGVPcmlnaW5JdGVtQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKVxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRFdmVudEhhbmRsZXIpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50SGFuZGxlciksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2VsZWN0aW9uTW9kZVNldEV2ZW50SGFuZGxlciksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlcilcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==