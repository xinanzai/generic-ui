/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureColumnConfigComponent } from './structure.column-config.component';
import { StructureColumnConfigTriggerComponent } from './structure.column-config-trigger.component';
import { StructureColumnConfigSortComponent } from './main/sort/structure.column-config-sort.component';
import { StructureColumnConfigColumnHideComponent } from './main/hide/structure.column-config-column-hide.component';
import { StructureColumnConfigColumnMoveComponent } from './main/move/structure.column-config-column-move.component';
import { fabricImports } from '../../structure-fabric.imports';
import { StructureColumnManagerModule } from '../../column-manager/structure.column-manager.module';
import { StructureColumnMenuIconComponent } from './icon/structure.column-menu-icon.component';
import { StructureColumnMenuArrowIconComponent } from './icon/structure.column-menu-arrow-icon.component';
import { UniqueValueListModule } from '../../../../../structure/filter/feature/unique/unique-value-list.module';
/** @type {?} */
var declarations = [
    StructureColumnConfigComponent,
    StructureColumnConfigTriggerComponent,
    StructureColumnConfigSortComponent,
    StructureColumnConfigColumnHideComponent,
    StructureColumnConfigColumnMoveComponent,
    StructureColumnMenuIconComponent,
    StructureColumnMenuArrowIconComponent
];
var StructureColumnMenuModule = /** @class */ (function () {
    function StructureColumnMenuModule() {
    }
    StructureColumnMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        StructureColumnManagerModule,
                        UniqueValueListModule
                    ],
                    declarations: declarations,
                    exports: declarations
                },] }
    ];
    return StructureColumnMenuModule;
}());
export { StructureColumnMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3JILE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3JILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQzs7SUFFMUcsWUFBWSxHQUFHO0lBQ3BCLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsZ0NBQWdDO0lBQ2hDLHFDQUFxQztDQUNyQztBQUVEO0lBQUE7SUFXQSxDQUFDOztnQkFYQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osYUFBYTt3QkFDYiw0QkFBNEI7d0JBQzVCLHFCQUFxQjtxQkFDckI7b0JBQ0QsWUFBWSxFQUFFLFlBQVk7b0JBQzFCLE9BQU8sRUFBRSxZQUFZO2lCQUNyQjs7SUFFRCxnQ0FBQztDQUFBLEFBWEQsSUFXQztTQURZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdUcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy10cmlnZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9tYWluL3NvcnQvc3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uSGlkZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9oaWRlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5Nb3ZlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL21vdmUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50JztcbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vc3RydWN0dXJlLmNvbHVtbi1tZW51LWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVBcnJvd0ljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vc3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlTGlzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS91bmlxdWUvdW5pcXVlLXZhbHVlLWxpc3QubW9kdWxlJztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1RyaWdnZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NvcnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbkhpZGVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbk1vdmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbk1lbnVJY29uQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb2x1bW5NZW51QXJyb3dJY29uQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdGZhYnJpY0ltcG9ydHMsXG5cdFx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSxcblx0XHRVbmlxdWVWYWx1ZUxpc3RNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGRlY2xhcmF0aW9uc1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlIHtcbn1cbiJdfQ==