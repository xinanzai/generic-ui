import { ElementRef, RendererFactory2 } from '@angular/core';
import { SchemaWarehouse } from '../../../schema/feature-api/schema.warehouse';
import { SchemaReadModelRootId } from '../../../schema/feature-api/read/schema.read-model-root-id';
import { Reactive } from '../../../../common/cdk/reactive';
export declare class SchemaCssClassManager extends Reactive {
    private readonly rendererFactory2;
    private readonly schemaReadModelRepository;
    private readonly VERTICAL_GRID_CLASS_NAME;
    private readonly HORIZONTAL_GRID_CLASS_NAME;
    private readonly THEME_FABRIC_CLASS_NAME;
    private readonly THEME_MATERIAL_CLASS_NAME;
    private readonly THEME_LIGHT_CLASS_NAME;
    private readonly THEME_DARK_CLASS_NAME;
    private readonly THEME_GENERIC_CLASS_NAME;
    private readonly ROW_COLORING_ODD;
    private readonly ROW_COLORING_EVEN;
    private readonly renderer;
    private cssClass;
    private cssHostRef;
    constructor(rendererFactory2: RendererFactory2, schemaReadModelRepository: SchemaWarehouse);
    init(elementRef: ElementRef, schemaReadModelRootId: SchemaReadModelRootId): void;
    private updateState;
    private renderCssClasses;
    private toggleCssClass;
    private removeThemeCssClasses;
    private resolveThemeClassName;
    private resolveRowColoringClassName;
    private removeRowColoringClasses;
    private addClass;
    private removeClass;
}
