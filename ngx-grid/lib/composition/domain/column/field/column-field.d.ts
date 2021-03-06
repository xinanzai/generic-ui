import { ColumnFieldId } from './column-field.id';
import { ColumnFieldAccessor } from './column-field-accessor';
import { DataType } from '../../../../../structure/field/domain/core/field/data/data-type';
import { OriginItemEntity } from '../../../../../structure/source/domain/origin/origin-item-entity';
export declare class ColumnField {
    private readonly fieldId;
    private readonly accessor;
    private readonly searchAccessor;
    private readonly dataType;
    constructor(fieldId: ColumnFieldId, accessor: ColumnFieldAccessor, dataType: DataType, searchAccessor: ColumnFieldAccessor);
    getId(): ColumnFieldId;
    getValue(entity: OriginItemEntity): any;
    getAccessor(): ColumnFieldAccessor;
    getSearchAccessor(): ColumnFieldAccessor;
    getDataType(): DataType;
}
