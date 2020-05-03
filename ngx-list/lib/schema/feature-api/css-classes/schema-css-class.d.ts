import { SchemaTheme } from '../../domain/theme/schema-theme';
import { SchemaRowColoring } from '../../domain/coloring/schema-row-coloring';
export declare class SchemaCssClass {
    readonly verticalGrid: boolean;
    readonly horizontalGrid: boolean;
    readonly theme: SchemaTheme;
    readonly rowColoring: SchemaRowColoring;
    constructor(verticalGrid: boolean, horizontalGrid: boolean, theme: SchemaTheme, rowColoring: SchemaRowColoring);
    getRowColoring(): SchemaRowColoring;
}
