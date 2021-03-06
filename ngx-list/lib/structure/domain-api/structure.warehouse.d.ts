import { Observable } from 'rxjs';
import { AggregateId } from '@generic-ui/hermes';
import { StructureReadModelRepository } from './read/structure.read-model-repository';
import { StructureReadModelRoot } from './read/structure.read-model-root';
export declare class StructureWarehouse {
    private readonly structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    onStructure(aggregateId?: AggregateId): Observable<StructureReadModelRoot>;
}
