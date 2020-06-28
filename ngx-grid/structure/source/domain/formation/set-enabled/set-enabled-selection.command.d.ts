import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
export declare class SetEnabledSelectionCommand extends Command {
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
