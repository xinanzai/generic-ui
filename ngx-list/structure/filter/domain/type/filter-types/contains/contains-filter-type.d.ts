import { BaseFilterType } from '../../base-filter-type';
import { OriginItemEntity } from '../../../../../source/domain/origin/origin-item-entity';
import { Field } from '../../../../../field/domain/core/field/field';
import { FilterTypeId } from '../../filter-type.id';
export declare class ContainsFilterType extends BaseFilterType<string> {
    constructor(filterTypeId: FilterTypeId);
    getName(): string;
    protected filterEntity(entity: OriginItemEntity, field: Field, value: string): boolean;
}
