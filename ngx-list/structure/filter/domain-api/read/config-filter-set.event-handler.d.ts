import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { FilterEnabledRepository } from './filter-enabled.repository';
import { ConfigFilterSetEvent } from '../../domain/config/config-filter-set.event';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class ConfigFilterSetEventHandler implements DomainEventHandler<StructureId, ConfigFilterSetEvent> {
    private structureFilterRepository;
    constructor(structureFilterRepository: FilterEnabledRepository);
    forEvent(): DomainEventType<ConfigFilterSetEvent>;
    handle(event: ConfigFilterSetEvent): void;
}
