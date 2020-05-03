import { AggregateEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from './origin/origin-item-entity';
import { StructureId } from '../structure.id';
import { TypeField } from '../structure/field/data-type/type.field';
export declare class SourceManager {
    private loading;
    private fetched;
    private origin;
    private entities;
    private preparedEntities;
    private slicedEntities;
    isLoading(): boolean;
    isFetched(): boolean;
    setLoading(enabled: boolean): void;
    setEntities(ent: Array<OriginItemEntity>): void;
    getEntities(): Array<OriginItemEntity>;
    setPreparedEntities(): void;
    getPreparedEntities(): Array<OriginItemEntity>;
    setSlicedEntities(ent: Array<OriginItemEntity>): void;
    getSlicedEntities(): Array<OriginItemEntity>;
    setOrigin(items: Array<any>, structureId: StructureId): AggregateEvent<StructureId>;
    setConvertedOrigin(items: Array<any>, structureId: StructureId): AggregateEvent<StructureId>;
    getOrigin(): Array<OriginItemEntity>;
    getOriginSize(): number;
    editOriginItem(itemId: string, value: any, field: TypeField, structureId: StructureId): ReadonlyArray<AggregateEvent<StructureId>>;
    removeOriginItem(itemId: string, structureId: StructureId): Array<AggregateEvent<StructureId>>;
    private convertItems;
    private createOriginChangedEvent;
    private findOriginItem;
    private findOriginItemIndex;
    private recalculatePositions;
}
