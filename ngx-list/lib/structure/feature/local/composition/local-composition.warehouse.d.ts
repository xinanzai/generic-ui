import { Observable } from 'rxjs';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { CompositionReadModelRootRepository } from '../../../../composition/domain-api/read/composition.read-model-root-repository';
import { CellTemplateWithContext } from '../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../../../../composition/domain-api/read/definition/cell-template-with-accessor';
import { FieldId } from '../../../../../structure/field/domain/core/field/field.id';
import { SortOrder } from '../../../../composition/domain/column/sort/sort-order';
export declare class LocalCompositionWarehouse extends CompositionWarehouse {
    private readonly compositionId;
    constructor(compositionId: CompositionId, compositionRepository: CompositionReadModelRootRepository);
    onWidth(): Observable<number>;
    onContainerWidth(compositionId?: CompositionId): Observable<number>;
    onWidthForEachColumn(): Observable<Array<number>>;
    onHeaderColumns(): Observable<Array<CellTemplateWithContext>>;
    onAllColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    onSortOrder(fieldId: FieldId): Observable<SortOrder>;
    onTemplateColumns(): Observable<Array<CellTemplateWithAccessor>>;
    onResizeWidth(): Observable<boolean>;
}
