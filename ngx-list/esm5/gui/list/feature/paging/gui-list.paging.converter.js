/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PagingDisplayMode } from '../../../../structure/paging/feature/mode/paging-display-mode';
var GuiListPagingConverter = /** @class */ (function () {
    function GuiListPagingConverter() {
    }
    /**
     * @param {?} guiListPaging
     * @return {?}
     */
    GuiListPagingConverter.prototype.convert = /**
     * @param {?} guiListPaging
     * @return {?}
     */
    function (guiListPaging) {
        /** @type {?} */
        var pagingConfig = {};
        if (guiListPaging.enabled !== undefined && guiListPaging.enabled !== null) {
            pagingConfig.enabled = guiListPaging.enabled;
        }
        if (guiListPaging.page !== undefined && guiListPaging.page !== null) {
            pagingConfig.page = guiListPaging.page;
        }
        if (guiListPaging.pageSize !== undefined && guiListPaging.pageSize !== null) {
            pagingConfig.pageSize = guiListPaging.pageSize;
        }
        if (guiListPaging.pageSizes !== undefined && guiListPaging.pageSizes !== null) {
            pagingConfig.pageSizes = guiListPaging.pageSizes;
        }
        if (guiListPaging.pagerTop !== undefined && guiListPaging.pagerTop !== null) {
            pagingConfig.pagerTop = guiListPaging.pagerTop;
        }
        else {
            pagingConfig.pagerTop = true;
        }
        if (guiListPaging.pagerBottom !== undefined && guiListPaging.pagerBottom !== null) {
            pagingConfig.pagerBottom = guiListPaging.pagerBottom;
        }
        pagingConfig.displayMode = PagingDisplayMode.BASIC;
        return pagingConfig;
    };
    return GuiListPagingConverter;
}());
export { GuiListPagingConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9wYWdpbmcvZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHbEc7SUFBQTtJQXFDQSxDQUFDOzs7OztJQW5DQSx3Q0FBTzs7OztJQUFQLFVBQVEsYUFBNEI7O1lBRS9CLFlBQVksR0FBaUIsRUFBRTtRQUVuQyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzFFLFlBQVksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztTQUM3QztRQUVELElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDcEUsWUFBWSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUM1RSxZQUFZLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7U0FDL0M7UUFFRCxJQUFJLGFBQWEsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzlFLFlBQVksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztTQUNqRDtRQUVELElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDNUUsWUFBWSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO1NBQy9DO2FBQU07WUFDTixZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUM3QjtRQUVELElBQUksYUFBYSxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDbEYsWUFBWSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1NBQ3JEO1FBRUQsWUFBWSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFFbkQsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVGLDZCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUxpc3RQYWdpbmcgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2d1aS5saXN0LnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlJztcblxuXG5leHBvcnQgY2xhc3MgR3VpTGlzdFBhZ2luZ0NvbnZlcnRlciB7XG5cblx0Y29udmVydChndWlMaXN0UGFnaW5nOiBHdWlMaXN0UGFnaW5nKTogUGFnaW5nQ29uZmlnIHtcblxuXHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLmVuYWJsZWQgPSBndWlMaXN0UGFnaW5nLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZSAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcucGFnZSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2UgPSBndWlMaXN0UGFnaW5nLnBhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZVNpemUgIT09IHVuZGVmaW5lZCAmJiBndWlMaXN0UGFnaW5nLnBhZ2VTaXplICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZVNpemUgPSBndWlMaXN0UGFnaW5nLnBhZ2VTaXplO1xuXHRcdH1cblxuXHRcdGlmIChndWlMaXN0UGFnaW5nLnBhZ2VTaXplcyAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcucGFnZVNpemVzICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZVNpemVzID0gZ3VpTGlzdFBhZ2luZy5wYWdlU2l6ZXM7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZXJUb3AgIT09IHVuZGVmaW5lZCAmJiBndWlMaXN0UGFnaW5nLnBhZ2VyVG9wICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJUb3AgPSBndWlMaXN0UGFnaW5nLnBhZ2VyVG9wO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJUb3AgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChndWlMaXN0UGFnaW5nLnBhZ2VyQm90dG9tICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5wYWdlckJvdHRvbSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tID0gZ3VpTGlzdFBhZ2luZy5wYWdlckJvdHRvbTtcblx0XHR9XG5cblx0XHRwYWdpbmdDb25maWcuZGlzcGxheU1vZGUgPSBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblxuXHRcdHJldHVybiBwYWdpbmdDb25maWc7XG5cdH1cblxufVxuIl19