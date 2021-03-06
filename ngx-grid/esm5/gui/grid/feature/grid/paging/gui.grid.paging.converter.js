/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PagingDisplayMode } from '../../../../../structure/paging/feature/mode/paging-display-mode';
import { GuiPagingDisplay } from '../../../domain-api/gui.grid.public-api';
var GuiGridPagingConverter = /** @class */ (function () {
    function GuiGridPagingConverter() {
    }
    /**
     * @param {?} guiPaging
     * @return {?}
     */
    GuiGridPagingConverter.prototype.convert = /**
     * @param {?} guiPaging
     * @return {?}
     */
    function (guiPaging) {
        /** @type {?} */
        var pagingConfig = {};
        if (guiPaging.enabled !== undefined && guiPaging.enabled !== null) {
            pagingConfig.enabled = guiPaging.enabled;
        }
        if (guiPaging.page !== undefined && guiPaging.page !== null) {
            pagingConfig.page = guiPaging.page;
        }
        if (guiPaging.pageSize !== undefined && guiPaging.pageSize !== null) {
            pagingConfig.pageSize = guiPaging.pageSize;
        }
        if (guiPaging.pageSizes !== undefined && guiPaging.pageSizes !== null) {
            pagingConfig.pageSizes = guiPaging.pageSizes;
        }
        if (guiPaging.pagerTop !== undefined && guiPaging.pagerTop !== null) {
            pagingConfig.pagerTop = guiPaging.pagerTop;
        }
        if (guiPaging.pagerBottom !== undefined && guiPaging.pagerBottom !== null) {
            pagingConfig.pagerBottom = guiPaging.pagerBottom;
        }
        if (guiPaging.display !== undefined && guiPaging.display !== null) {
            pagingConfig.displayMode = this.convertDisplay(guiPaging.display);
        }
        return pagingConfig;
    };
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    GuiGridPagingConverter.prototype.convertDisplay = /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    function (pagingDisplay) {
        if (typeof pagingDisplay === 'string') {
            return this.convertString(pagingDisplay);
        }
        else {
            return this.convertEnum(pagingDisplay);
        }
    };
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    GuiGridPagingConverter.prototype.convertString = /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    function (pagingDisplay) {
        /** @type {?} */
        var loweredPaging = pagingDisplay.toLocaleLowerCase();
        switch (loweredPaging) {
            case 'basic':
                return PagingDisplayMode.BASIC;
            case 'advanced':
                return PagingDisplayMode.ADVANCED;
            default:
                return PagingDisplayMode.BASIC;
        }
    };
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    GuiGridPagingConverter.prototype.convertEnum = /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    function (pagingDisplay) {
        switch (pagingDisplay) {
            case GuiPagingDisplay.BASIC:
                return PagingDisplayMode.BASIC;
            case GuiPagingDisplay.ADVANCED:
                return PagingDisplayMode.ADVANCED;
            default:
                return PagingDisplayMode.BASIC;
        }
    };
    return GuiGridPagingConverter;
}());
export { GuiGridPagingConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL3BhZ2luZy9ndWkuZ3JpZC5wYWdpbmcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNyRyxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUl0RjtJQUFBO0lBOEVBLENBQUM7Ozs7O0lBNUVBLHdDQUFPOzs7O0lBQVAsVUFBUSxTQUFvQjs7WUFFdkIsWUFBWSxHQUFpQixFQUFFO1FBRW5DLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUM1RCxZQUFZLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDbkM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3BFLFlBQVksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUMzQztRQUVELElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEUsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUNwRSxZQUFZLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQzFFLFlBQVksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztTQUNqRDtRQUVELElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRTtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLCtDQUFjOzs7OztJQUF0QixVQUF1QixhQUF3QztRQUU5RCxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN2QztJQUNGLENBQUM7Ozs7OztJQUVPLDhDQUFhOzs7OztJQUFyQixVQUFzQixhQUFxQjs7WUFFcEMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtRQUV2RCxRQUFRLGFBQWEsRUFBRTtZQUV0QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFFaEMsS0FBSyxVQUFVO2dCQUNkLE9BQU8saUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBRW5DO2dCQUNDLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sNENBQVc7Ozs7O0lBQW5CLFVBQW9CLGFBQStCO1FBRWxELFFBQVEsYUFBYSxFQUFFO1lBRXRCLEtBQUssZ0JBQWdCLENBQUMsS0FBSztnQkFDMUIsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFFaEMsS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRO2dCQUM3QixPQUFPLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUVuQztnQkFDQyxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQztTQUNoQztJQUNGLENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUE5RUQsSUE4RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUnO1xuaW1wb3J0IHsgR3VpUGFnaW5nLCBHdWlQYWdpbmdEaXNwbGF5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmctY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZFBhZ2luZ0NvbnZlcnRlciB7XG5cblx0Y29udmVydChndWlQYWdpbmc6IEd1aVBhZ2luZyk6IFBhZ2luZ0NvbmZpZyB7XG5cblx0XHRsZXQgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWcgPSB7fTtcblxuXHRcdGlmIChndWlQYWdpbmcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcuZW5hYmxlZCA9IGd1aVBhZ2luZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZSAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZSA9IGd1aVBhZ2luZy5wYWdlO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZVNpemUgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZVNpemUgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZSA9IGd1aVBhZ2luZy5wYWdlU2l6ZTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2VTaXplcyAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlU2l6ZXMgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXMgPSBndWlQYWdpbmcucGFnZVNpemVzO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZXJUb3AgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZXJUb3AgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9IGd1aVBhZ2luZy5wYWdlclRvcDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2VyQm90dG9tICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2VyQm90dG9tICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJCb3R0b20gPSBndWlQYWdpbmcucGFnZXJCb3R0b207XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5kaXNwbGF5ICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLmRpc3BsYXkgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5kaXNwbGF5TW9kZSA9IHRoaXMuY29udmVydERpc3BsYXkoZ3VpUGFnaW5nLmRpc3BsYXkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYWdpbmdDb25maWc7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnREaXNwbGF5KHBhZ2luZ0Rpc3BsYXk6IHN0cmluZyB8IEd1aVBhZ2luZ0Rpc3BsYXkpOiBQYWdpbmdEaXNwbGF5TW9kZSB7XG5cblx0XHRpZiAodHlwZW9mIHBhZ2luZ0Rpc3BsYXkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0U3RyaW5nKHBhZ2luZ0Rpc3BsYXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bShwYWdpbmdEaXNwbGF5KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcocGFnaW5nRGlzcGxheTogc3RyaW5nKTogUGFnaW5nRGlzcGxheU1vZGUge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFBhZ2luZyA9IHBhZ2luZ0Rpc3BsYXkudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFBhZ2luZykge1xuXG5cdFx0XHRjYXNlICdiYXNpYyc6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblxuXHRcdFx0Y2FzZSAnYWR2YW5jZWQnOlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQURWQU5DRUQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHBhZ2luZ0Rpc3BsYXk6IEd1aVBhZ2luZ0Rpc3BsYXkpOiBQYWdpbmdEaXNwbGF5TW9kZSB7XG5cblx0XHRzd2l0Y2ggKHBhZ2luZ0Rpc3BsYXkpIHtcblxuXHRcdFx0Y2FzZSBHdWlQYWdpbmdEaXNwbGF5LkJBU0lDOlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQkFTSUM7XG5cblx0XHRcdGNhc2UgR3VpUGFnaW5nRGlzcGxheS5BRFZBTkNFRDpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQkFTSUM7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==