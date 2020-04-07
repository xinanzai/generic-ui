import { PagingDispatcher } from '../../domain/paging/paging.dispatcher';
import { PagingRepository } from '../../read/paging/paging.repository';
import { PagingManagerFactory } from '../../domain/paging/paging.manager-factory';
import { PagingConverter } from '../../read/paging/paging.converter';
import { StructurePagingCommandDispatcher } from './structure-paging.command-dispatcher';
import { StructurePagingReadModelWarehouse } from './structure-paging.read-model-warehouse';
import { StructurePagingEventRepository } from './structure-paging.event-repository';
export declare const pagingCommandHandlers: import("@angular/core").Provider[];
export declare const pagingProviders: (typeof PagingRepository | typeof StructurePagingReadModelWarehouse | typeof PagingDispatcher | typeof StructurePagingCommandDispatcher | typeof PagingManagerFactory | typeof PagingConverter | typeof StructurePagingEventRepository)[];
