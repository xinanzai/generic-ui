import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { GuiGridGateway } from './gui.grid-gateway';
import { GuiGridIdGenerator } from './register/gui.grid-id.generator';
import { GuiGridRegister } from './register/gui.grid.register';
import { GuiGridApi } from './api/gui.grid.api-provider';
import { FormationCommandDispatcher } from '../../../../structure/source/domain-api/formation/formation.command-dispatcher';
import { SourceCommandDispatcher } from '../../../../structure/source/domain-api/source.command-dispatcher';
import { FormationWarehouse } from '../../../../structure/source/domain-api/formation/formation.warehouse';
export declare class GuiGridComponent extends GuiGridGateway implements OnInit {
    private readonly platformId;
    private readonly elementRef;
    private readonly changeDetectorRef;
    private readonly gridRegister;
    private readonly gridIdGenerator;
    private readonly formationCommandDispatcher;
    private readonly formationWarehouse;
    private readonly sourceCommandDispatcher;
    structureRef: any;
    gridId: string;
    private localGridId;
    api: GuiGridApi;
    constructor(platformId: any, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, gridRegister: GuiGridRegister, gridIdGenerator: GuiGridIdGenerator, formationCommandDispatcher: FormationCommandDispatcher, formationWarehouse: FormationWarehouse, sourceCommandDispatcher: SourceCommandDispatcher);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getElementRef(): ElementRef;
    getGridId(): string;
    detectChanges(): void;
    private exposeGridId;
    private initApi;
}