/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CellView } from '../../../domain/column/cell-view';
var ViewTemplatesComponent = /** @class */ (function () {
    function ViewTemplatesComponent() {
    }
    /**
     * @param {?} view
     * @return {?}
     */
    ViewTemplatesComponent.prototype.getTemplate = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        switch (view) {
            case CellView.TEXT:
                return this.textTemplate;
            case CellView.NUMBER:
                return this.numberTemplate;
            case CellView.CHIP:
                return this.chipTemplate;
            case CellView.LINK:
                return this.linkTemplate;
            case CellView.IMAGE:
                return this.imageTemplate;
            case CellView.CHECKBOX:
                return this.checkboxTemplate;
            case CellView.BOLD:
                return this.boldTemplate;
            case CellView.ITALIC:
                return this.italicTemplate;
            case CellView.CUSTOM:
                return this.customTemplate;
            case CellView.FUNCTION:
                return this.functionTemplate;
            case CellView.DATE:
                return this.dateTemplate;
            case CellView.BAR:
                return this.barTemplate;
            case CellView.PERCENTAGE_BAR:
                return this.percentageBarTemplate;
            case CellView.PERCENTAGE:
                return this.percentageTemplate;
            default:
                return this.textTemplate;
        }
    };
    ViewTemplatesComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\n\t\t<ng-template #text let-element=\"element\">\n\t\t\t<gui-view-text [value]=\"element\"></gui-view-text>\n\t\t</ng-template>\n\n\t\t<ng-template #number let-element=\"element\">\n\t\t\t<span class=\"gui-cell-number\">\n\t\t\t\t{{ element.value }}\n\t\t\t</span>\n\t\t</ng-template>\n\n\t\t<ng-template #chip let-element=\"element\">\n\t\t\t<gui-chip>\n\t\t\t\t<gui-view-text [value]=\"element\"></gui-view-text>\n\t\t\t</gui-chip>\n\t\t</ng-template>\n\n\t\t<ng-template #link let-element=\"element\">\n\t\t\t<a gui-button link=\"true\" href=\"{{ element.value }}\">\n\t\t\t\t<gui-view-text [value]=\"element\"></gui-view-text>\n\t\t\t</a>\n\t\t</ng-template>\n\n\t\t<ng-template #image let-element=\"element\">\n\t\t\t<img src=\"{{ element.value }}\"/>\n\t\t</ng-template>\n\n\t\t<ng-template #checkbox let-element=\"element\">\n\t\t\t<span class=\"gui-cell-boolean\">\n\t\t\t\t<gui-checkbox [checked]=\"!!element.value\" [disabled]=\"true\"></gui-checkbox>\n\t\t\t</span>\n\t\t</ng-template>\n\n\t\t<ng-template #bold let-element=\"element\">\n\t\t\t<gui-view-text bold [value]=\"element\"></gui-view-text>\n\t\t</ng-template>\n\n\t\t<ng-template #italic let-element=\"element\">\n\t\t\t<gui-view-text italic [value]=\"element\"></gui-view-text>\n\t\t</ng-template>\n\n\t\t<ng-template #custom let-element=\"element\">\n\t\t\t{{ element.value }}\n\t\t</ng-template>\n\n\t\t<ng-template #function let-element=\"element\">\n\t\t\t<gui-function-view [element]=\"element\"></gui-function-view>\n\t\t</ng-template>\n\n\t\t<ng-template #date let-element=\"element\">\n\t\t\t<span class=\"gui-view-text\">{{ element.value | date: 'dd/MM/yyyy' }}</span>\n\t\t</ng-template>\n\n\t\t<ng-template #bar let-element=\"element\">\n\t\t\t<gui-bar-view [value]=\"element.value\" [showPercentage]=\"false\"></gui-bar-view>\n\t\t</ng-template>\n\n\t\t<ng-template #percentageBar let-element=\"element\">\n\t\t\t<gui-bar-view [value]=\"element.value\" [showPercentage]=\"true\"></gui-bar-view>\n\t\t</ng-template>\n\n\t\t<ng-template #percentage let-element=\"element\">\n\t\t\t<gui-percentage-view [value]=\"element.value\"></gui-percentage-view>\n\t\t</ng-template>\n\n\t"
                }] }
    ];
    ViewTemplatesComponent.propDecorators = {
        textTemplate: [{ type: ViewChild, args: ['text', { read: TemplateRef, static: true },] }],
        numberTemplate: [{ type: ViewChild, args: ['number', { read: TemplateRef, static: true },] }],
        chipTemplate: [{ type: ViewChild, args: ['chip', { read: TemplateRef, static: true },] }],
        linkTemplate: [{ type: ViewChild, args: ['link', { read: TemplateRef, static: true },] }],
        imageTemplate: [{ type: ViewChild, args: ['image', { read: TemplateRef, static: true },] }],
        checkboxTemplate: [{ type: ViewChild, args: ['checkbox', { read: TemplateRef, static: true },] }],
        boldTemplate: [{ type: ViewChild, args: ['bold', { read: TemplateRef, static: true },] }],
        italicTemplate: [{ type: ViewChild, args: ['italic', { read: TemplateRef, static: true },] }],
        customTemplate: [{ type: ViewChild, args: ['custom', { read: TemplateRef, static: true },] }],
        functionTemplate: [{ type: ViewChild, args: ['function', { read: TemplateRef, static: true },] }],
        dateTemplate: [{ type: ViewChild, args: ['date', { read: TemplateRef, static: true },] }],
        barTemplate: [{ type: ViewChild, args: ['bar', { read: TemplateRef, static: true },] }],
        percentageBarTemplate: [{ type: ViewChild, args: ['percentageBar', { read: TemplateRef, static: true },] }],
        percentageTemplate: [{ type: ViewChild, args: ['percentage', { read: TemplateRef, static: true },] }]
    };
    return ViewTemplatesComponent;
}());
export { ViewTemplatesComponent };
if (false) {
    /** @type {?} */
    ViewTemplatesComponent.prototype.textTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.numberTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.chipTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.linkTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.imageTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.checkboxTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.boldTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.italicTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.customTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.functionTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.dateTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.barTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.percentageBarTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.percentageTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSTVEO0lBQUE7SUFvS0EsQ0FBQzs7Ozs7SUFuREEsNENBQVc7Ozs7SUFBWCxVQUFZLElBQWM7UUFFekIsUUFBUSxJQUFJLEVBQUU7WUFFYixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBRTNCLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTlCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFNUIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTlCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxHQUFHO2dCQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7WUFFekIsS0FBSyxRQUFRLENBQUMsY0FBYztnQkFDM0IsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFFbkMsS0FBSyxRQUFRLENBQUMsVUFBVTtnQkFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFFaEM7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzFCO0lBQ0YsQ0FBQzs7Z0JBbEtELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb25FQWtFVDtpQkFDRDs7OytCQUdDLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7aUNBR3JELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBR3ZELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBR3JELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0NBR3JELFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7bUNBR3RELFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBR3pELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7aUNBR3JELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7aUNBR3ZELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7bUNBR3ZELFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBR3pELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7OEJBR3JELFNBQVMsU0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7d0NBR3BELFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7cUNBRzlELFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBc0Q3RCw2QkFBQztDQUFBLEFBcEtELElBb0tDO1NBL0ZZLHNCQUFzQjs7O0lBRWxDLDhDQUMrQjs7SUFFL0IsZ0RBQ2lDOztJQUVqQyw4Q0FDK0I7O0lBRS9CLDhDQUMrQjs7SUFFL0IsK0NBQ2dDOztJQUVoQyxrREFDbUM7O0lBRW5DLDhDQUMrQjs7SUFFL0IsZ0RBQ2lDOztJQUVqQyxnREFDaUM7O0lBRWpDLGtEQUNtQzs7SUFFbkMsOENBQytCOztJQUUvQiw2Q0FDOEI7O0lBRTlCLHVEQUN3Qzs7SUFFeEMsb0RBQ3FDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctdGVtcGxhdGUgI3RleHQgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLXZpZXctdGV4dCBbdmFsdWVdPVwiZWxlbWVudFwiPjwvZ3VpLXZpZXctdGV4dD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNudW1iZXIgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1jZWxsLW51bWJlclwiPlxuXHRcdFx0XHR7eyBlbGVtZW50LnZhbHVlIH19XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY2hpcCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktY2hpcD5cblx0XHRcdFx0PGd1aS12aWV3LXRleHQgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS12aWV3LXRleHQ+XG5cdFx0XHQ8L2d1aS1jaGlwPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2xpbmsgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8YSBndWktYnV0dG9uIGxpbms9XCJ0cnVlXCIgaHJlZj1cInt7IGVsZW1lbnQudmFsdWUgfX1cIj5cblx0XHRcdFx0PGd1aS12aWV3LXRleHQgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS12aWV3LXRleHQ+XG5cdFx0XHQ8L2E+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjaW1hZ2UgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8aW1nIHNyYz1cInt7IGVsZW1lbnQudmFsdWUgfX1cIi8+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY2hlY2tib3ggbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1jZWxsLWJvb2xlYW5cIj5cblx0XHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCIhIWVsZW1lbnQudmFsdWVcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPjwvZ3VpLWNoZWNrYm94PlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2JvbGQgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLXZpZXctdGV4dCBib2xkIFt2YWx1ZV09XCJlbGVtZW50XCI+PC9ndWktdmlldy10ZXh0PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2l0YWxpYyBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktdmlldy10ZXh0IGl0YWxpYyBbdmFsdWVdPVwiZWxlbWVudFwiPjwvZ3VpLXZpZXctdGV4dD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjdXN0b20gbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHR7eyBlbGVtZW50LnZhbHVlIH19XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZnVuY3Rpb24gbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWZ1bmN0aW9uLXZpZXcgW2VsZW1lbnRdPVwiZWxlbWVudFwiPjwvZ3VpLWZ1bmN0aW9uLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZGF0ZSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXZpZXctdGV4dFwiPnt7IGVsZW1lbnQudmFsdWUgfCBkYXRlOiAnZGQvTU0veXl5eScgfX08L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjYmFyIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1iYXItdmlldyBbdmFsdWVdPVwiZWxlbWVudC52YWx1ZVwiIFtzaG93UGVyY2VudGFnZV09XCJmYWxzZVwiPjwvZ3VpLWJhci12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI3BlcmNlbnRhZ2VCYXIgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWJhci12aWV3IFt2YWx1ZV09XCJlbGVtZW50LnZhbHVlXCIgW3Nob3dQZXJjZW50YWdlXT1cInRydWVcIj48L2d1aS1iYXItdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNwZXJjZW50YWdlIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1wZXJjZW50YWdlLXZpZXcgW3ZhbHVlXT1cImVsZW1lbnQudmFsdWVcIj48L2d1aS1wZXJjZW50YWdlLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdUZW1wbGF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBUZW1wbGF0ZXNDb21wb25lbnQge1xuXG5cdEBWaWV3Q2hpbGQoJ3RleHQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0dGV4dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ251bWJlcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRudW1iZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdjaGlwJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoaXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdsaW5rJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGxpbmtUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdpbWFnZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRpbWFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2NoZWNrYm94JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoZWNrYm94VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnYm9sZCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRib2xkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnaXRhbGljJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGl0YWxpY1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2N1c3RvbScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdmdW5jdGlvbicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRmdW5jdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZGF0ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2JhcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRiYXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdwZXJjZW50YWdlQmFyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHBlcmNlbnRhZ2VCYXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdwZXJjZW50YWdlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHBlcmNlbnRhZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRnZXRUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0c3dpdGNoICh2aWV3KSB7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuVEVYVDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3Lk5VTUJFUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMubnVtYmVyVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ0hJUDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hpcFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkxJTks6XG5cdFx0XHRcdHJldHVybiB0aGlzLmxpbmtUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5JTUFHRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW1hZ2VUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DSEVDS0JPWDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tib3hUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5CT0xEOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ib2xkVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuSVRBTElDOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pdGFsaWNUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DVVNUT006XG5cdFx0XHRcdHJldHVybiB0aGlzLmN1c3RvbVRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkZVTkNUSU9OOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvblRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkRBVEU6XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhdGVUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5CQVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLmJhclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LlBFUkNFTlRBR0VfQkFSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wZXJjZW50YWdlQmFyVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuUEVSQ0VOVEFHRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMucGVyY2VudGFnZVRlbXBsYXRlO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0VGVtcGxhdGU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==