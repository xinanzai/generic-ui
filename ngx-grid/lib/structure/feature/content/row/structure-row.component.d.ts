import { ChangeDetectorRef, OnInit, SimpleChanges, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../composition/domain-api/read/definition/cell-template-with-accessor';
import { ItemEntity } from '../../../../../structure/source/domain/core/item/item.entity';
import { FormationCommandDispatcher } from '../../../../../structure/source/domain-api/formation/formation.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { FormationWarehouse } from '../../../../../structure/source/domain-api/formation/formation.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
export declare class StructureRowComponent extends SmartComponent implements OnChanges, OnInit {
    private readonly changeDetectorRef;
    private readonly elRef;
    private readonly renderer2;
    private readonly structureId;
    private readonly formationWarehouse;
    private readonly formationCommandDispatcher;
    entity: ItemEntity;
    columns: Array<CellTemplateWithAccessor>;
    editMode: boolean;
    cellEditing: boolean;
    searchPhrase: string;
    index: number;
    detailsEnabled: boolean;
    checkboxSelection: boolean;
    selectedItem: boolean;
    private row;
    constructor(changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, renderer2: Renderer2, structureId: StructureId, formationWarehouse: FormationWarehouse, formationCommandDispatcher: FormationCommandDispatcher);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    trackByFn(): number;
    selectRow(): void;
    checkSelectedItem(): void;
}
