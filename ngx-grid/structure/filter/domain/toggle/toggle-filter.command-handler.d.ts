import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../lib/structure/domain/structure/structure-aggregate.repository';
import { ToggleFilterCommand } from './toggle-filter.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class ToggleFilterCommandHandler implements CommandHandler<StructureAggregate, ToggleFilterCommand> {
    private readonly structureAggregateRepository;
    private readonly domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<ToggleFilterCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: ToggleFilterCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: ToggleFilterCommand): void;
}
