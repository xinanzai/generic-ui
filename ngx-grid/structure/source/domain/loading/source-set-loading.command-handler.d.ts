import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SourceSetLoadingCommand } from './source-set-loading.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class SourceSetLoadingCommandHandler implements CommandHandler<StructureAggregate, SourceSetLoadingCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SourceSetLoadingCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SourceSetLoadingCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SourceSetLoadingCommand): void;
}
