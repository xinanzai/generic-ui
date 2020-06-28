/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED, HermesModule } from '@generic-ui/hermes';
import { fabricImports } from '../feature/structure-fabric.imports';
import { PagingFeatureModule } from '../../../structure/paging/feature/paging.feature-module';
import { StructureInfoPanelModule } from '../feature/panel/info/structure.info-panel.module';
import { CompositionModule } from '../../composition/domain-api/composition.module';
import { StructureComponent } from '../feature/structure.component';
import { StructureHeaderComponent } from '../feature/header/structure-header.component';
import { StructureHeaderColumnsComponent } from '../feature/header/columns/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from '../feature/header/filters/structure-header-filters.component';
import { StructureHeaderFilterComponent } from '../feature/header/filters/structure.header-filter.component';
import { StructureContentComponent } from '../feature/content/structure-content.component';
import { StructureRowComponent } from '../feature/content/row/structure-row.component';
import { StructureCellComponent } from '../feature/content/cell/structure.cell.component';
import { StructureContainerComponent } from '../feature/content/structure-container.component';
import { StructureQuickFiltersComponent } from '../feature/header/quick-filters/structure.quick-filters.component';
import { StructureBlueprintComponent } from '../feature/blueprint/structure.blueprint.component';
import { StructureColumnConfigComponent } from '../feature/header/menu/structure.column-config.component';
import { STRUCTURE_CSS_CLASS_NAME } from './structure-tokens';
import { StructureDefinition } from '../feature/structure-definition';
import { SourceWarehouse } from '../../../structure/source/domain-api/source.warehouse';
import { StructureIdGenerator } from '../feature/structure-id.generator';
import { structureCommandHandlers, structureDomainEventHandlers, structureProviders } from './structure.providers';
import { LoggerModule } from '../../../common/cdk/logger/logger.module';
import { ItemEntityFactory } from '../../../structure/source/domain/core/item/item.entity-factory';
import { StructureTopPanelModule } from '../feature/panel/top/structure.top-panel.module';
import { StructureColumnMenuModule } from '../feature/header/menu/structure.column-menu.module';
import { StructureSummariesPanelModule } from '../feature/panel/summaries/structure.summaries-panel.module';
import { StructureColumnManagerModule } from '../feature/column-manager/structure.column-manager.module';
import { StructureAggregateFactory } from '../domain/structure/structure.aggregate-factory';
import { InMemoryStructureAggregateRepository } from '../infrastructure/in-memory/domain/in-memory.structure-aggregate.repository';
import { CreateStructureCommandHandler } from '../domain/structure/create-structure/create-structure-command-handler.service';
import { StructureCellEditComponent } from '../feature/content/cell/edit/structure.cell-edit.component';
import { StructureThemeConverter } from '../feature/schema/structure.theme.converter';
import { SchemaModule } from '../../../schema/domain-api/schema.module';
import { StructureCellEditBooleanComponent } from '../feature/content/cell/boolean/structure.cell-edit-boolean.component';
import { StructureRowDetailViewComponent } from '../feature/row-detail/view/structure.row-detail-view.component';
import { StructureTitlePanelComponent } from '../feature/panel/title-panel/structure.title-panel.component';
import { StructureFooterPanelComponent } from '../feature/panel/footer-panel/structure.footer-panel.component';
import { PagingDomainModule } from '../../../structure/paging/domain/paging.domain-module';
import { EmptySourceFeatureModule } from '../../../structure/empty-source/feature/empty-source.feature-module';
import { SortingDomainModule } from '../../../structure/sorting/domain/sorting.domain-module';
import { SortingFeatureModule } from '../../../structure/sorting/feature/sorting.feature-module';
import { FieldFeatureModule } from '../../../structure/field/feature/field.feature-module';
import { FieldDomainModule } from '../../../structure/field/domain/field.domain-module';
import { SearchFeatureModule } from '../../../structure/search/feature/search.feature-module';
import { SearchApiModule } from '../../../structure/search/domain-api/search.api-module';
import { SearchDomainModule } from '../../../structure/search/domain/search.domain-module';
import { StructureThemeGateway } from '../feature/gateway/schema/structure-theme.gateway';
import { StructureSchemaManagerModule } from '../../../schema/feature/manager/structure.schema-manager.module';
import { FilterDomainModule } from '../../../structure/filter/domain/filter.domain-module';
import { FilterApiModule } from '../../../structure/filter/domain-api/filter.api-module';
import { SourceDomainModule } from '../../../structure/source/domain/source.domain-module';
import { SourceApiModule } from '../../../structure/source/domain-api/source.api-module';
import { SelectAllComponent } from '../feature/header/columns/select-all/select-all.component';
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
        ...PagingDomainModule.commandHandlers(),
        ...SortingDomainModule.commandHandlers(),
        ...FieldDomainModule.commandHandlers(),
        ...SearchDomainModule.commandHandlers(),
        ...FilterDomainModule.commandHandlers(),
        ...SourceDomainModule.commandHandlers(),
        ...structureCommandHandlers
    ], [
        ...structureDomainEventHandlers,
        ...SearchDomainModule.domainEventHandlers(),
        ...FilterDomainModule.domainEventHandlers(),
        ...SourceDomainModule.domainEventHandlers()
    ]),
    // .withConfig({
    // 	loggers: false
    // }),
    ...fabricImports,
    PagingFeatureModule,
    SortingFeatureModule,
    FieldFeatureModule,
    SearchFeatureModule,
    SearchApiModule,
    FilterApiModule,
    SourceApiModule,
    StructureInfoPanelModule,
    StructureSummariesPanelModule,
    StructureTopPanelModule,
    StructureColumnMenuModule,
    StructureColumnManagerModule,
    StructureSchemaManagerModule,
    EmptySourceFeatureModule,
    CompositionModule,
    SchemaModule,
    LoggerModule
];
/** @type {?} */
const declarations = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    SelectAllComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureCellComponent,
    StructureCellEditComponent,
    StructureCellEditBooleanComponent,
    StructureContainerComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent,
    StructureRowDetailViewComponent,
    StructureTitlePanelComponent,
    StructureFooterPanelComponent,
    StructureThemeGateway
];
/** @type {?} */
const entryComponents = [
    StructureColumnConfigComponent,
    StructureRowDetailViewComponent
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
    SourceWarehouse,
    StructureIdGenerator,
    ...structureProviders
];
/** @type {?} */
const exportDeclarations = [
    FabricModule,
    StructureComponent,
    StructureThemeGateway,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent,
    ...fabricImports,
    PagingFeatureModule
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
    static withConfig(structureConfig = {
        cssClassName: '',
        hermesModuleConfig: { loggers: false }
    }) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQXVCLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQy9HLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQy9HLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzNGLE9BQU8s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T0FBTyxHQUFHLEtBQUssQ0FBQztTQUNwQztJQUNGLENBQUM7Ozs7O0lBdEJELE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQXlDO1FBQzFELFlBQVksRUFBRSxFQUFFO1FBQ2hCLGtCQUFrQixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtLQUN0QztRQUNBLE9BQU87WUFDTixRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1Y7b0JBQ0MsT0FBTyxFQUFFLHdCQUF3QjtvQkFDakMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxZQUFZO2lCQUN0QztnQkFDRCxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtnQkFDekYsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZGLEdBQUcsU0FBUzthQUNaO1NBQ0QsQ0FBQztJQUNILENBQUM7O0FBbEJNLGtDQUFrQixHQUFHLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDOztZQVJwRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTztnQkFDUCxZQUFZO2dCQUNaLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLGVBQWU7YUFDZjs7Ozs0Q0F1QmEsTUFBTSxTQUFDLFdBQVc7Ozs7SUFwQi9CLG1DQUFvRDs7Ozs7SUFvQnhDLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIEVWRU5UX0xPR0dFUl9FTkFCTEVELCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vZmVhdHVyZS9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlIH0gZnJvbSAnLi4vZmVhdHVyZS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24ubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS1oZWFkZXItZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUuaGVhZGVyLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvY29udGVudC9zdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93Q29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9jb250ZW50L3Jvdy9zdHJ1Y3R1cmUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9jb250ZW50L2NlbGwvc3RydWN0dXJlLmNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9xdWljay1maWx0ZXJzL3N0cnVjdHVyZS5xdWljay1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2JsdWVwcmludC9zdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuL3N0cnVjdHVyZS10b2tlbnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGVmaW5pdGlvbiB9IGZyb20gJy4uL2ZlYXR1cmUvc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWRHZW5lcmF0b3IgfSBmcm9tICcuLi9mZWF0dXJlL3N0cnVjdHVyZS1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgc3RydWN0dXJlQ29tbWFuZEhhbmRsZXJzLCBzdHJ1Y3R1cmVEb21haW5FdmVudEhhbmRsZXJzLCBzdHJ1Y3R1cmVQcm92aWRlcnMgfSBmcm9tICcuL3N0cnVjdHVyZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi4vZmVhdHVyZS9zdHJ1Y3R1cmUtbW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQgeyBMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXIubW9kdWxlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5LWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlVG9wUGFuZWxNb2R1bGUgfSBmcm9tICcuLi9mZWF0dXJlL3BhbmVsL3RvcC9zdHJ1Y3R1cmUudG9wLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlIH0gZnJvbSAnLi4vZmVhdHVyZS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsTW9kdWxlIH0gZnJvbSAnLi4vZmVhdHVyZS9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uL2ZlYXR1cmUvY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9kb21haW4vaW4tbWVtb3J5LnN0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS9jcmVhdGUtc3RydWN0dXJlLWNvbW1hbmQtaGFuZGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9jb250ZW50L2NlbGwvZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4uL2ZlYXR1cmUvc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2NvbnRlbnQvY2VsbC9ib29sZWFuL3N0cnVjdHVyZS5jZWxsLWVkaXQtYm9vbGVhbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVRpdGxlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL3BhbmVsL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL3BhbmVsL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2RvbWFpbi9wYWdpbmcuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZW1wdHktc291cmNlL2ZlYXR1cmUvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNvcnRpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vc29ydGluZy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNvcnRpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL3NvcnRpbmcvZmVhdHVyZS9zb3J0aW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEZpZWxkRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9mZWF0dXJlL2ZpZWxkLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEZpZWxkRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9maWVsZC5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2ZlYXR1cmUvc2VhcmNoLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaEFwaU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2guYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi9zZWFyY2guZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUdhdGV3YXkgfSBmcm9tICcuLi9mZWF0dXJlL2dhdGV3YXkvc2NoZW1hL3N0cnVjdHVyZS10aGVtZS5nYXRld2F5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNjaGVtYU1hbmFnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2ZpbHRlci9kb21haW4vZmlsdGVyLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyQXBpTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2ZpbHRlci9kb21haW4tYXBpL2ZpbHRlci5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluL3NvdXJjZS5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNvdXJjZUFwaU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2UuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWxlY3RBbGxDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9jb2x1bW5zL3NlbGVjdC1hbGwvc2VsZWN0LWFsbC5jb21wb25lbnQnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uKCkge1xuXHRyZXR1cm4gbmV3IFN0cnVjdHVyZURlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xufVxuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlS2V5ID0gJ1N0cnVjdHVyZUFnZ3JlZ2F0ZSc7XG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdENvbW1vbk1vZHVsZSxcblx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0SGVybWVzTW9kdWxlLFxuXHRIZXJtZXNNb2R1bGUuZGVmaW5lQWdncmVnYXRlKFxuXHRcdHN0cnVjdHVyZUtleSxcblx0XHRTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kSGFuZGxlcixcblx0XHRbXG5cdFx0XHQuLi5QYWdpbmdEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5Tb3J0aW5nRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpLFxuXHRcdFx0Li4uRmllbGREb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5TZWFyY2hEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5GaWx0ZXJEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5Tb3VyY2VEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5zdHJ1Y3R1cmVDb21tYW5kSGFuZGxlcnNcblx0XHRdLCBbXG5cdFx0XHQuLi5zdHJ1Y3R1cmVEb21haW5FdmVudEhhbmRsZXJzLFxuXHRcdFx0Li4uU2VhcmNoRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKSxcblx0XHRcdC4uLkZpbHRlckRvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKCksXG5cdFx0XHQuLi5Tb3VyY2VEb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpXG5cdFx0XVxuXHQpLFxuXHQvLyAud2l0aENvbmZpZyh7XG5cdC8vIFx0bG9nZ2VyczogZmFsc2Vcblx0Ly8gfSksXG5cdC4uLmZhYnJpY0ltcG9ydHMsXG5cblx0UGFnaW5nRmVhdHVyZU1vZHVsZSxcblx0U29ydGluZ0ZlYXR1cmVNb2R1bGUsXG5cdEZpZWxkRmVhdHVyZU1vZHVsZSxcblx0U2VhcmNoRmVhdHVyZU1vZHVsZSxcblx0U2VhcmNoQXBpTW9kdWxlLFxuXHRGaWx0ZXJBcGlNb2R1bGUsXG5cdFNvdXJjZUFwaU1vZHVsZSxcblxuXHRTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWVudU1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSxcblx0U3RydWN0dXJlU2NoZW1hTWFuYWdlck1vZHVsZSxcblxuXHRFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUsXG5cblx0Q29tcG9zaXRpb25Nb2R1bGUsXG5cdFNjaGVtYU1vZHVsZSxcblxuXHRMb2dnZXJNb2R1bGVcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCxcblx0U2VsZWN0QWxsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxFZGl0Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsRWRpdEJvb2xlYW5Db21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblx0U3RydWN0dXJlUXVpY2tGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQsXG5cdFN0cnVjdHVyZVRpdGxlUGFuZWxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUZvb3RlclBhbmVsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVUaGVtZUdhdGV3YXlcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdHtcblx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0dXNlVmFsdWU6ICdzdHJ1Y3R1cmUnXG5cdH0sXG5cdHtcblx0XHRwcm92aWRlOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdHVzZUZhY3Rvcnk6IGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb25cblx0fSxcblx0SXRlbUVudGl0eUZhY3RvcnksXG5cdFN0cnVjdHVyZVRoZW1lQ29udmVydGVyLFxuXG5cdFNvdXJjZVdhcmVob3VzZSxcblxuXHRTdHJ1Y3R1cmVJZEdlbmVyYXRvcixcblxuXHQuLi5zdHJ1Y3R1cmVQcm92aWRlcnNcblxuXTtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRGYWJyaWNNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlVGhlbWVHYXRld2F5LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXG5cdC4uLmZhYnJpY0ltcG9ydHMsXG5cdFBhZ2luZ0ZlYXR1cmVNb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gWy4uLmV4cG9ydERlY2xhcmF0aW9uc107XG5cblx0c3RhdGljIHdpdGhDb25maWcoc3RydWN0dXJlQ29uZmlnOiBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgPSB7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnJyxcblx0XHRoZXJtZXNNb2R1bGVDb25maWc6IHsgbG9nZ2VyczogZmFsc2UgfVxuXHR9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBTdHJ1Y3R1cmVNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHRcdFx0XHR1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmNzc0NsYXNzTmFtZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHQuLi5wcm92aWRlcnNcblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93WydoZXJtZXNBcGknXS5sb2dnZXJzID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==