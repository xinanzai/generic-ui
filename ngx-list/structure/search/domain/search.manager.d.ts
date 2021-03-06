import { OriginItemEntity } from '../../source/domain/origin/origin-item-entity';
import { Field } from '../../field/domain/core/field/field';
export declare class SearchManager {
    private searchFields;
    private searchPhrase;
    private enabledDataTypes;
    addSearchPhrase(fields: Array<Field>, searchPhrase: string): void;
    removeSearchFilters(): void;
    search(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
}
