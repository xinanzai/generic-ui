import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSelectionModeCommand } from './set-selection-mode.command';
import { StructureAggregate } from '../../../../../lib/structure/domain/structure/structure.aggregate';
export declare class SetSelectionModeCommandHandler implements CommandHandler<StructureAggregate, SetSelectionModeCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSelectionModeCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetSelectionModeCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetSelectionModeCommand): void;
}
