/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED, HermesModule } from '@generic-ui/hermes';
import { fabricImports } from '../ui/structure-fabric.imports';
import { StructurePagingModule } from '../ui/paging/structure-paging.module';
import { StructureInfoPanelModule } from '../ui/panel/info/structure.info-panel.module';
import { CompositionModule } from '../../composition/ui-api/composition.module';
import { StructureComponent } from '../ui/structure.component';
import { StructureHeaderComponent } from '../ui/header/structure-header.component';
import { StructureHeaderColumnsComponent } from '../ui/header/columns/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from '../ui/header/filters/structure-header-filters.component';
import { StructureHeaderFilterComponent } from '../ui/header/filters/structure.header-filter.component';
import { StructureContentComponent } from '../ui/content/structure-content.component';
import { StructureRowComponent } from '../ui/content/row/structure-row.component';
import { StructureCellComponent } from '../ui/content/cell/structure.cell.component';
import { StructureContainerComponent } from '../ui/content/structure-container.component';
import { StructureQuickFiltersComponent } from '../ui/header/quick-filters/structure.quick-filters.component';
import { StructureBlueprintComponent } from '../ui/blueprint/structure.blueprint.component';
import { StructureColumnConfigComponent } from '../ui/header/menu/structure.column-config.component';
import { STRUCTURE_CSS_CLASS_NAME } from './structure/structure-tokens';
import { StructureDefinition } from '../ui/structure-definition';
import { SourceReadModelService } from './source/source-read-model.service';
import { StructureIdGenerator } from '../ui/structure-id.generator';
import { structureCommandHandlers, structureProviders } from './structure/structure.providers';
import { LoggerModule } from '../../../common/cdk/logger/logger.module';
import { ItemEntityFactory } from '../domain/source/item.entity-factory';
import { StructureTopPanelModule } from '../ui/panel/top/structure.top-panel.module';
import { StructureEmptySourceComponent } from '../ui/content/empty-source/structure-empty-source.component';
import { StructureColumnMenuModule } from '../ui/header/menu/structure.column-menu.module';
import { StructureAggregationPanelModule } from '../ui/panel/aggregation/structure.aggregation-panel.module';
import { StructureColumnManagerModule } from '../ui/column-manager/structure.column-manager.module';
import { StructureAggregateFactory } from '../domain/structure/command/structure.aggregate-factory';
import { InMemoryStructureAggregateRepository } from '../infrastructure/in-memory/structure/commad/in-memory.structure-aggregate.repository';
import { CreateStructureCommandHandler } from '../domain/structure/command/create-structure/create-structure-command-handler.service';
import { formationCommandHandlers } from './formation/formation.providers';
import { pagingCommandHandlers } from './paging/paging.providers';
import { schemaCommandHandlers } from './schema/schema.providers';
import { sourceCommandHandlers } from './source/source.providers';
import { StructureCellEditComponent } from '../ui/content/cell/edit/structure.cell-edit.component';
import { StructureThemeConverter } from '../ui/schema/structure.theme.converter';
/**
 * @return {?}
 */
export function createStructureDefinition() {
    return new StructureDefinition.DefaultBuilder().build();
}
/** @type {?} */
export const structureKey = 'StructureAggregate';
/** @type {?} */
const imports = [
    CommonModule,
    ReactiveFormsModule,
    HermesModule,
    HermesModule.defineAggregate(structureKey, StructureAggregateFactory, InMemoryStructureAggregateRepository, CreateStructureCommandHandler, [
        ...formationCommandHandlers,
        ...pagingCommandHandlers,
        ...schemaCommandHandlers,
        ...sourceCommandHandlers,
        ...structureCommandHandlers
    ]),
    // .withConfig({
    // 	loggers: false
    // }),
    ...fabricImports,
    StructurePagingModule,
    StructureInfoPanelModule,
    StructureAggregationPanelModule,
    StructureTopPanelModule,
    StructureColumnMenuModule,
    StructureColumnManagerModule,
    CompositionModule,
    LoggerModule
];
/** @type {?} */
const declarations = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureCellComponent,
    StructureCellEditComponent,
    StructureContainerComponent,
    StructureEmptySourceComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent
];
/** @type {?} */
const entryComponents = [
    StructureColumnConfigComponent
];
/** @type {?} */
const providers = [
    {
        provide: STRUCTURE_CSS_CLASS_NAME,
        useValue: 'structure'
    },
    {
        provide: StructureDefinition,
        useFactory: createStructureDefinition
    },
    ItemEntityFactory,
    StructureThemeConverter,
    SourceReadModelService,
    StructureIdGenerator,
    ...structureProviders
];
/** @type {?} */
const exportDeclarations = [
    FabricModule,
    StructureComponent,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent,
    ...fabricImports,
    StructurePagingModule
];
export class StructureModule {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window['hermesApi'].loggers = false;
        }
    }
    /**
     * @param {?=} structureConfig
     * @return {?}
     */
    static withConfig(structureConfig = { cssClassName: '', hermesModuleConfig: { loggers: false } }) {
        return {
            ngModule: StructureModule,
            providers: [
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                ...providers
            ]
        };
    }
}
StructureModule.exportDeclarations = [...exportDeclarations];
StructureModule.decorators = [
    { type: NgModule, args: [{
                imports,
                declarations,
                exports: exportDeclarations,
                entryComponents
            },] }
];
/** @nocollapse */
StructureModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /** @type {?} */
    StructureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    StructureModule.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbkYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFF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QUFzQixFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2dCQUN6RixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtnQkFDdkYsR0FBRyxTQUFTO2FBQ1o7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7QUFmTSxrQ0FBa0IsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQzs7WUFScEQsUUFBUSxTQUFDO2dCQUNULE9BQU87Z0JBQ1AsWUFBWTtnQkFDWixPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixlQUFlO2FBQ2Y7Ozs7NENBb0JhLE1BQU0sU0FBQyxXQUFXOzs7O0lBakIvQixtQ0FBb0Q7Ozs7O0lBaUJ4QyxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uL3VpL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdNb2R1bGUgfSBmcm9tICcuLi91aS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlIH0gZnJvbSAnLi4vdWkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24ubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL3N0cnVjdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vdWkvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuLi91aS9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuLi91aS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uL3VpL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vdWkvY29udGVudC9zdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93Q29tcG9uZW50IH0gZnJvbSAnLi4vdWkvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4uL3VpL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vdWkvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuLi91aS9oZWFkZXIvcXVpY2stZmlsdGVycy9zdHJ1Y3R1cmUucXVpY2stZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50IH0gZnJvbSAnLi4vdWkvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4uL3VpL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtdG9rZW5zJztcbmltcG9ydCB7IFN0cnVjdHVyZURlZmluaXRpb24gfSBmcm9tICcuLi91aS9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi9zb3VyY2Uvc291cmNlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4uL3VpL3N0cnVjdHVyZS1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgc3RydWN0dXJlQ29tbWFuZEhhbmRsZXJzLCBzdHJ1Y3R1cmVQcm92aWRlcnMgfSBmcm9tICcuL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucHJvdmlkZXJzJztcbmltcG9ydCB7IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyB9IGZyb20gJy4uL3VpL3N0cnVjdHVyZS1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5LWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlVG9wUGFuZWxNb2R1bGUgfSBmcm9tICcuLi91aS9wYW5lbC90b3Avc3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRW1wdHlTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuLi91aS9jb250ZW50L2VtcHR5LXNvdXJjZS9zdHJ1Y3R1cmUtZW1wdHktc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlIH0gZnJvbSAnLi4vdWkvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsTW9kdWxlIH0gZnJvbSAnLi4vdWkvcGFuZWwvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vdWkvY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvc3RydWN0dXJlL2NvbW1hZC9pbi1tZW1vcnkuc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2NyZWF0ZS1zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS1jb21tYW5kLWhhbmRsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRpb25Db21tYW5kSGFuZGxlcnMgfSBmcm9tICcuL2Zvcm1hdGlvbi9mb3JtYXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IHBhZ2luZ0NvbW1hbmRIYW5kbGVycyB9IGZyb20gJy4vcGFnaW5nL3BhZ2luZy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgc2NoZW1hQ29tbWFuZEhhbmRsZXJzIH0gZnJvbSAnLi9zY2hlbWEvc2NoZW1hLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBzb3VyY2VDb21tYW5kSGFuZGxlcnMgfSBmcm9tICcuL3NvdXJjZS9zb3VyY2UucHJvdmlkZXJzJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi4vdWkvY29udGVudC9jZWxsL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuLi91aS9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb24oKSB7XG5cdHJldHVybiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG59XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3R1cmVLZXkgPSAnU3RydWN0dXJlQWdncmVnYXRlJztcblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRIZXJtZXNNb2R1bGUsXG5cdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0c3RydWN0dXJlS2V5LFxuXHRcdFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0SW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdENyZWF0ZVN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyLFxuXHRcdFtcblx0XHRcdC4uLmZvcm1hdGlvbkNvbW1hbmRIYW5kbGVycyxcblx0XHRcdC4uLnBhZ2luZ0NvbW1hbmRIYW5kbGVycyxcblx0XHRcdC4uLnNjaGVtYUNvbW1hbmRIYW5kbGVycyxcblx0XHRcdC4uLnNvdXJjZUNvbW1hbmRIYW5kbGVycyxcblx0XHRcdC4uLnN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyc1xuXHRcdF1cblx0KSxcblx0Ly8gLndpdGhDb25maWcoe1xuXHQvLyBcdGxvZ2dlcnM6IGZhbHNlXG5cdC8vIH0pLFxuXHQuLi5mYWJyaWNJbXBvcnRzLFxuXG5cdFN0cnVjdHVyZVBhZ2luZ01vZHVsZSxcblx0U3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWVudU1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSxcblxuXHRDb21wb3NpdGlvbk1vZHVsZSxcblxuXHRMb2dnZXJNb2R1bGVcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsRWRpdENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVFbXB0eVNvdXJjZUNvbXBvbmVudCxcblx0U3RydWN0dXJlUXVpY2tGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdHtcblx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0dXNlVmFsdWU6ICdzdHJ1Y3R1cmUnXG5cdH0sXG5cdHtcblx0XHRwcm92aWRlOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdHVzZUZhY3Rvcnk6IGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb25cblx0fSxcblx0SXRlbUVudGl0eUZhY3RvcnksXG5cdFN0cnVjdHVyZVRoZW1lQ29udmVydGVyLFxuXG5cdFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UsXG5cblx0U3RydWN0dXJlSWRHZW5lcmF0b3IsXG5cblx0Li4uc3RydWN0dXJlUHJvdmlkZXJzXG5cbl07XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0RmFicmljTW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cblx0Li4uZmFicmljSW1wb3J0cyxcblx0U3RydWN0dXJlUGFnaW5nTW9kdWxlXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IFsuLi5leHBvcnREZWNsYXJhdGlvbnNdO1xuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKHN0cnVjdHVyZUNvbmZpZzogU3RydWN0dXJlTW9kdWxlQ29uZmlnID0geyBjc3NDbGFzc05hbWU6ICcnLCBoZXJtZXNNb2R1bGVDb25maWc6IHsgbG9nZ2VyczogZmFsc2UgfSB9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBTdHJ1Y3R1cmVNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHRcdFx0XHR1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmNzc0NsYXNzTmFtZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHQuLi5wcm92aWRlcnNcblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93WydoZXJtZXNBcGknXS5sb2dnZXJzID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==