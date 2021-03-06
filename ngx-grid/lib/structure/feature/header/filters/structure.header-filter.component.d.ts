import { OnInit } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithContext } from '../../../../composition/domain-api/read/definition/cell-template-with-context';
import { ChangedValueEmitter } from '../../../../composition/domain-api/read/edit/changed-value.emitter';
import { FilterCommandDispatcher } from '../../../../../structure/filter/domain-api/filter.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureHeaderFilterComponent extends SmartComponent implements OnInit {
    private structureFilterCommandService;
    private structureId;
    column: CellTemplateWithContext;
    sub: ChangedValueEmitter<unknown>;
    editContext: any;
    constructor(structureFilterCommandService: FilterCommandDispatcher, structureId: StructureId);
    ngOnInit(): void;
    filter(phrase: string): void;
}
