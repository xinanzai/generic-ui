import { ChangeDetectorRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FieldId } from '../../../field/domain/core/field/field.id';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { FilterWarehouse } from '../../domain-api/filter.warehouse';
import { UniqueValueReadModel } from '../../domain-api/unique/unique-value.read-model';
import { FilterCommandDispatcher } from '../../domain-api/filter.command-dispatcher';
export declare class UniqueValueListComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly filterWarehouse;
    private readonly filterCommandDispatcher;
    fieldId: FieldId;
    selectAllChecked: boolean;
    selectAllIndeterminate: boolean;
    uniqueValues: Array<UniqueValueReadModel>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, filterWarehouse: FilterWarehouse, filterCommandDispatcher: FilterCommandDispatcher);
    ngOnInit(): void;
    toggleAllSelect(): void;
    toggleSelect(uniqueValueReadModel: UniqueValueReadModel): void;
    clearFilters(): void;
}
