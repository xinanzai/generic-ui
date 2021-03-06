import { AggregateId } from '../../domain/aggregate-id';
export declare abstract class ReadModelRootId {
    private readonly uid;
    protected constructor(uid: string);
    abstract toAggregateId(): AggregateId;
    toString(): string;
    getId(): string;
    equals(entityId: ReadModelRootId): boolean;
}
