/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var structureKey = 'StructureAggregate';
/** @type {?} */
var imports = tslib_1.__spread([
    CommonModule,
    ReactiveFormsModule,
    HermesModule,
    HermesModule.defineAggregate(structureKey, StructureAggregateFactory, InMemoryStructureAggregateRepository, CreateStructureCommandHandler, tslib_1.__spread(PagingDomainModule.commandHandlers(), SortingDomainModule.commandHandlers(), FieldDomainModule.commandHandlers(), SearchDomainModule.commandHandlers(), FilterDomainModule.commandHandlers(), SourceDomainModule.commandHandlers(), structureCommandHandlers), tslib_1.__spread(structureDomainEventHandlers, SearchDomainModule.domainEventHandlers(), FilterDomainModule.domainEventHandlers(), SourceDomainModule.domainEventHandlers()))
], fabricImports, [
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
]);
/** @type {?} */
var declarations = [
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
var entryComponents = [
    StructureColumnConfigComponent,
    StructureRowDetailViewComponent
];
/** @type {?} */
var providers = tslib_1.__spread([
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
    StructureIdGenerator
], structureProviders);
/** @type {?} */
var exportDeclarations = tslib_1.__spread([
    FabricModule,
    StructureComponent,
    StructureThemeGateway,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent
], fabricImports, [
    PagingFeatureModule
]);
var StructureModule = /** @class */ (function () {
    function StructureModule(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window['hermesApi'].loggers = false;
        }
    }
    /**
     * @param {?=} structureConfig
     * @return {?}
     */
    StructureModule.withConfig = /**
     * @param {?=} structureConfig
     * @return {?}
     */
    function (structureConfig) {
        if (structureConfig === void 0) { structureConfig = {
            cssClassName: '',
            hermesModuleConfig: { loggers: false }
        }; }
        return {
            ngModule: StructureModule,
            providers: tslib_1.__spread([
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers }
            ], providers)
        };
    };
    StructureModule.exportDeclarations = tslib_1.__spread(exportDeclarations);
    StructureModule.decorators = [
        { type: NgModule, args: [{
                    imports: imports,
                    declarations: declarations,
                    exports: exportDeclarations,
                    entryComponents: entryComponents
                },] }
    ];
    /** @nocollapse */
    StructureModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return StructureModule;
}());
export { StructureModule };
if (false) {
    /** @type {?} */
    StructureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    StructureModule.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUF1QixRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRixPQUFP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dEM7UUFDQSxPQUFPO1lBQ04sUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUztnQkFDUjtvQkFDQyxPQUFPLEVBQUUsd0JBQXdCO29CQUNqQyxRQUFRLEVBQUUsZUFBZSxDQUFDLFlBQVk7aUJBQ3RDO2dCQUNELEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2dCQUN6RixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtlQUNwRixTQUFTLENBQ1o7U0FDRCxDQUFDO0lBQ0gsQ0FBQztJQWxCTSxrQ0FBa0Isb0JBQU8sa0JBQWtCLEVBQUU7O2dCQVJwRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxTQUFBO29CQUNQLFlBQVksY0FBQTtvQkFDWixPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixlQUFlLGlCQUFBO2lCQUNmOzs7O2dEQXVCYSxNQUFNLFNBQUMsV0FBVzs7SUFNaEMsc0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQTVCWSxlQUFlOzs7SUFFM0IsbUNBQW9EOzs7OztJQW9CeEMscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgRVZFTlRfTE9HR0VSX0VOQUJMRUQsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi9mZWF0dXJlL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUgfSBmcm9tICcuLi9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9zdHJ1Y3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9jb2x1bW5zL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9jb250ZW50L3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2NvbnRlbnQvcm93L3N0cnVjdHVyZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9jb250ZW50L3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvaGVhZGVyL3F1aWNrLWZpbHRlcnMvc3RydWN0dXJlLnF1aWNrLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4vc3RydWN0dXJlLXRva2Vucyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vZmVhdHVyZS9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4uL2ZlYXR1cmUvc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVDb21tYW5kSGFuZGxlcnMsIHN0cnVjdHVyZURvbWFpbkV2ZW50SGFuZGxlcnMsIHN0cnVjdHVyZVByb3ZpZGVycyB9IGZyb20gJy4vc3RydWN0dXJlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgfSBmcm9tICcuLi9mZWF0dXJlL3N0cnVjdHVyZS1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eUZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHktZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSB9IGZyb20gJy4uL2ZlYXR1cmUvcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tbWVudS5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxNb2R1bGUgfSBmcm9tICcuLi9mZWF0dXJlL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vZmVhdHVyZS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9jcmVhdGUtc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUtY29tbWFuZC1oYW5kbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2NvbnRlbnQvY2VsbC9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi4vZmVhdHVyZS9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTY2hlbWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9zY2hlbWEubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvY29udGVudC9jZWxsL2Jvb2xlYW4vc3RydWN0dXJlLmNlbGwtZWRpdC1ib29sZWFuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9yb3ctZGV0YWlsL3ZpZXcvc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGl0bGVQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvcGFuZWwvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvcGFuZWwvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3BhZ2luZy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9lbXB0eS1zb3VyY2UvZmVhdHVyZS9lbXB0eS1zb3VyY2UuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU29ydGluZ0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9zb3J0aW5nL2RvbWFpbi9zb3J0aW5nLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU29ydGluZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9mZWF0dXJlL3NvcnRpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGRGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2ZlYXR1cmUvZmllbGQuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGREb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2ZpZWxkLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvZmVhdHVyZS9zZWFyY2guZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoQXBpTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaERvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluL3NlYXJjaC5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lR2F0ZXdheSB9IGZyb20gJy4uL2ZlYXR1cmUvZ2F0ZXdheS9zY2hlbWEvc3RydWN0dXJlLXRoZW1lLmdhdGV3YXknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2NoZW1hTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlL21hbmFnZXIvc3RydWN0dXJlLnNjaGVtYS1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi9maWx0ZXIuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJBcGlNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi1hcGkvZmlsdGVyLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4vc291cmNlLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlQXBpTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNlbGVjdEFsbENvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvaGVhZGVyL2NvbHVtbnMvc2VsZWN0LWFsbC9zZWxlY3QtYWxsLmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb24oKSB7XG5cdHJldHVybiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG59XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3R1cmVLZXkgPSAnU3RydWN0dXJlQWdncmVnYXRlJztcblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRIZXJtZXNNb2R1bGUsXG5cdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0c3RydWN0dXJlS2V5LFxuXHRcdFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0SW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdENyZWF0ZVN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyLFxuXHRcdFtcblx0XHRcdC4uLlBhZ2luZ0RvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlNvcnRpbmdEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5GaWVsZERvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlNlYXJjaERvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLkZpbHRlckRvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlNvdXJjZURvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLnN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyc1xuXHRcdF0sIFtcblx0XHRcdC4uLnN0cnVjdHVyZURvbWFpbkV2ZW50SGFuZGxlcnMsXG5cdFx0XHQuLi5TZWFyY2hEb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpLFxuXHRcdFx0Li4uRmlsdGVyRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKSxcblx0XHRcdC4uLlNvdXJjZURvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKClcblx0XHRdXG5cdCksXG5cdC8vIC53aXRoQ29uZmlnKHtcblx0Ly8gXHRsb2dnZXJzOiBmYWxzZVxuXHQvLyB9KSxcblx0Li4uZmFicmljSW1wb3J0cyxcblxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRTb3J0aW5nRmVhdHVyZU1vZHVsZSxcblx0RmllbGRGZWF0dXJlTW9kdWxlLFxuXHRTZWFyY2hGZWF0dXJlTW9kdWxlLFxuXHRTZWFyY2hBcGlNb2R1bGUsXG5cdEZpbHRlckFwaU1vZHVsZSxcblx0U291cmNlQXBpTW9kdWxlLFxuXG5cdFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZVRvcFBhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlLFxuXHRTdHJ1Y3R1cmVTY2hlbWFNYW5hZ2VyTW9kdWxlLFxuXG5cdEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSxcblxuXHRDb21wb3NpdGlvbk1vZHVsZSxcblx0U2NoZW1hTW9kdWxlLFxuXG5cdExvZ2dlck1vZHVsZVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50LFxuXHRTZWxlY3RBbGxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbEVkaXRDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCxcblx0U3RydWN0dXJlVGl0bGVQYW5lbENvbXBvbmVudCxcblx0U3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQsXG5cdFN0cnVjdHVyZVRoZW1lR2F0ZXdheVxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW1xuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0e1xuXHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHR1c2VWYWx1ZTogJ3N0cnVjdHVyZSdcblx0fSxcblx0e1xuXHRcdHByb3ZpZGU6IFN0cnVjdHVyZURlZmluaXRpb24sXG5cdFx0dXNlRmFjdG9yeTogY3JlYXRlU3RydWN0dXJlRGVmaW5pdGlvblxuXHR9LFxuXHRJdGVtRW50aXR5RmFjdG9yeSxcblx0U3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cblx0U291cmNlV2FyZWhvdXNlLFxuXG5cdFN0cnVjdHVyZUlkR2VuZXJhdG9yLFxuXG5cdC4uLnN0cnVjdHVyZVByb3ZpZGVyc1xuXG5dO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEZhYnJpY01vZHVsZSxcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVUaGVtZUdhdGV3YXksXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cblx0Li4uZmFicmljSW1wb3J0cyxcblx0UGFnaW5nRmVhdHVyZU1vZHVsZVxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBbLi4uZXhwb3J0RGVjbGFyYXRpb25zXTtcblxuXHRzdGF0aWMgd2l0aENvbmZpZyhzdHJ1Y3R1cmVDb25maWc6IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyA9IHtcblx0XHRjc3NDbGFzc05hbWU6ICcnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzogeyBsb2dnZXJzOiBmYWxzZSB9XG5cdH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFN0cnVjdHVyZU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuY3NzQ2xhc3NOYW1lXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdC4uLnByb3ZpZGVyc1xuXHRcdFx0XVxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR3aW5kb3dbJ2hlcm1lc0FwaSddLmxvZ2dlcnMgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxufVxuIl19