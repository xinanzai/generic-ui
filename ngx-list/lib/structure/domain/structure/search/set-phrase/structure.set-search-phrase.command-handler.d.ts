import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSetSearchPhraseCommand } from './structure.set-search-phrase.command';
import { StructureSourceDomainEventPublisher } from '../../../source/structure.source.domain-event.publisher';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureSetSearchPhraseCommandHandler implements CommandHandler<StructureAggregate, StructureSetSearchPhraseCommand> {
    private readonly structureSourceDomainEventPublisher;
    private readonly domainEventPublisher;
    constructor(structureSourceDomainEventPublisher: StructureSourceDomainEventPublisher, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<StructureSetSearchPhraseCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: StructureSetSearchPhraseCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: StructureSetSearchPhraseCommand): void;
}
