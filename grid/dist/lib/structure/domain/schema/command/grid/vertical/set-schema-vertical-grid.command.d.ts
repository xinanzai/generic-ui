import { StructureId } from 'structure/domain/structure-id';
import { Command } from 'generic-ui-cqrs';
export declare class SetSchemaVerticalGridCommand extends Command {
    readonly structureId: StructureId;
    readonly enabled: boolean;
    constructor(structureId: StructureId, enabled: boolean);
}
