import { ChangeDetectorRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureReadModelRoot } from '../../domain-api/read/structure.read-model-root';
import { StructureDefinition } from '../structure-definition';
import { StructureId } from '../../domain/structure.id';
import { StructureWarehouse } from '../../domain-api/structure.warehouse';
import { PagingWarehouse } from '../../../../structure/paging/domain-api/paging.warehouse';
import { StructureInfoPanelArchive } from '../panel/info/structure.info-panel.archive';
import { StructureSummariesArchive } from '../panel/summaries/structure.summaries.archive';
import { FilterWarehouse } from '../../../../structure/filter/domain-api/filter.warehouse';
import { SearchWarehouse } from '../../../../structure/search/domain-api/search.warehouse';
import { StructureHeaderTopEnabledArchive } from '../header/structure-header-top-enabled.archive';
import { StructureHeaderBottomEnabledArchive } from '../header/structure-header-bottom-enabled.archive';
import { StructureTitlePanelConfigArchive } from '../panel/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from '../panel/footer-panel/structure.footer-panel.config-archive';
export declare class StructureBlueprintComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly structureDefinition;
    private readonly structureId;
    private readonly structureReadModelService;
    private readonly structureInfoPanelEnabledArchive;
    private readonly pagingReadModelService;
    private readonly structureSummariesArchive;
    private readonly structureFilterReadModelRepository;
    private readonly structureSearchReadModelRepository;
    private readonly structureHeaderTopEnabledArchive;
    private readonly structureHeaderBottomEnabledArchive;
    private readonly structureTitlePanelConfigArchive;
    private readonly structureFooterPanelConfigArchive;
    private className;
    structure: StructureReadModelRoot;
    searchEnabled: boolean;
    topSummariesPanelEnabled: boolean;
    bottomSummariesPanelEnabled: boolean;
    quickFiltersEnabled: boolean;
    infoPanelEnabled: boolean;
    readonly contentCssClass: string;
    readonly headerCssClass: string;
    topHeaderEnabled: boolean;
    bottomHeaderEnabled: boolean;
    private pagingReadModel;
    titlePanelEnabled: boolean;
    footerPanelEnabled: boolean;
    items: Array<any>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureDefinition: StructureDefinition, structureId: StructureId, structureReadModelService: StructureWarehouse, structureInfoPanelEnabledArchive: StructureInfoPanelArchive, pagingReadModelService: PagingWarehouse, structureSummariesArchive: StructureSummariesArchive, structureFilterReadModelRepository: FilterWarehouse, structureSearchReadModelRepository: SearchWarehouse, structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive, structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive, className: string);
    ngOnInit(): void;
    getHeaderTopClasses(): string;
    getHeaderBottomClasses(): string;
    isColumnHeaderTopEnabled(): boolean;
    isColumnHeaderBottomEnabled(): boolean;
    isPagingTopEnabled(): boolean;
    isPagingBottomEnabled(): boolean;
    isSourceEmpty(): boolean;
}
