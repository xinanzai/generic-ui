/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureColumnMenuConfig = /** @class */ (function () {
    function StructureColumnMenuConfig(enabled, sort, filter, columnsManager) {
        if (enabled === void 0) { enabled = false; }
        if (sort === void 0) { sort = true; }
        if (filter === void 0) { filter = false; }
        if (columnsManager === void 0) { columnsManager = false; }
        this.enabled = enabled;
        this.sort = sort;
        this.filter = filter;
        this.columnsManager = columnsManager;
    }
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.default = /**
     * @return {?}
     */
    function () {
        return new StructureColumnMenuConfig();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureColumnMenuConfig.fromConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return new StructureColumnMenuConfig(config.enabled, config.sort, config.filter, config.columnsManager);
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled &&
            (this.sort || this.filter || this.columnsManager);
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isMainEnabled = /**
     * @return {?}
     */
    function () {
        return this.sort;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isSortingEnabled = /**
     * @return {?}
     */
    function () {
        return this.sort;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isFilteringEnabled = /**
     * @return {?}
     */
    function () {
        return this.filter;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isColumnManagerEnabled = /**
     * @return {?}
     */
    function () {
        return this.columnsManager;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getMenus = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var menus = [];
        if (this.isMainEnabled()) {
            menus.push(this.getMainMenu());
        }
        if (this.isFilteringEnabled()) {
            menus.push(this.getFilterMenu());
        }
        if (this.isColumnManagerEnabled()) {
            menus.push(this.getColumnMenu());
        }
        return menus;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getActiveMenu = /**
     * @return {?}
     */
    function () {
        return this.getMenus()[0];
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getMainMenu = /**
     * @return {?}
     */
    function () {
        return StructureColumnMenuConfig.MAIN;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getFilterMenu = /**
     * @return {?}
     */
    function () {
        return StructureColumnMenuConfig.FILTER;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getColumnMenu = /**
     * @return {?}
     */
    function () {
        return StructureColumnMenuConfig.COLUMNS;
    };
    StructureColumnMenuConfig.MAIN = 'Menu';
    StructureColumnMenuConfig.FILTER = 'Filter';
    StructureColumnMenuConfig.COLUMNS = 'Columns';
    return StructureColumnMenuConfig;
}());
export { StructureColumnMenuConfig };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.MAIN;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.FILTER;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.COLUMNS;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.sort;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.filter;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.columnsManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQXFCQyxtQ0FBb0IsT0FBd0IsRUFDakMsSUFBb0IsRUFDcEIsTUFBdUIsRUFDdkIsY0FBK0I7UUFIdEIsd0JBQUEsRUFBQSxlQUF3QjtRQUNqQyxxQkFBQSxFQUFBLFdBQW9CO1FBQ3BCLHVCQUFBLEVBQUEsY0FBdUI7UUFDdkIsK0JBQUEsRUFBQSxzQkFBK0I7UUFIdEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDakMsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO0lBQzFDLENBQUM7Ozs7SUF2Qk0saUNBQU87OztJQUFkO1FBQ0MsT0FBTyxJQUFJLHlCQUF5QixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTSxvQ0FBVTs7OztJQUFqQixVQUFrQixNQUF3QjtRQUN6QyxPQUFPLElBQUkseUJBQXlCLENBQ25DLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsTUFBTSxDQUFDLElBQUksRUFDWCxNQUFNLENBQUMsTUFBTSxFQUNiLE1BQU0sQ0FBQyxjQUFjLENBQ3JCLENBQUM7SUFDSCxDQUFDOzs7O0lBY0QsNkNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTztZQUNsQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELGlEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsb0RBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELHNEQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCwwREFBc0I7OztJQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsNENBQVE7OztJQUFSOztZQUVPLEtBQUssR0FBRyxFQUFFO1FBRWhCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFO1lBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxpREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0MsT0FBTyx5QkFBeUIsQ0FBQyxJQUFJLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELGlEQUFhOzs7SUFBYjtRQUNDLE9BQU8seUJBQXlCLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxpREFBYTs7O0lBQWI7UUFDQyxPQUFPLHlCQUF5QixDQUFDLE9BQU8sQ0FBQztJQUMxQyxDQUFDO0lBbEV1Qiw4QkFBSSxHQUFHLE1BQU0sQ0FBQztJQUVkLGdDQUFNLEdBQUcsUUFBUSxDQUFDO0lBRWxCLGlDQUFPLEdBQUcsU0FBUyxDQUFDO0lBZ0U3QyxnQ0FBQztDQUFBLEFBbkZELElBbUZDO1NBbkZZLHlCQUF5Qjs7Ozs7O0lBZXJDLCtCQUFzQzs7Ozs7SUFFdEMsaUNBQTBDOzs7OztJQUUxQyxrQ0FBNEM7Ozs7O0lBRWhDLDRDQUFnQzs7Ozs7SUFDekMseUNBQTRCOzs7OztJQUM1QiwyQ0FBK0I7Ozs7O0lBQy9CLG1EQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlLWFwaS9jb2x1bW4tbWVudS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cblx0c3RhdGljIGRlZmF1bHQoKTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKCk7XG5cdH1cblxuXHRzdGF0aWMgZnJvbUNvbmZpZyhjb25maWc6IENvbHVtbk1lbnVDb25maWcpOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcoXG5cdFx0XHRjb25maWcuZW5hYmxlZCxcblx0XHRcdGNvbmZpZy5zb3J0LFxuXHRcdFx0Y29uZmlnLmZpbHRlcixcblx0XHRcdGNvbmZpZy5jb2x1bW5zTWFuYWdlclxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQUlOID0gJ01lbnUnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZJTFRFUiA9ICdGaWx0ZXInO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENPTFVNTlMgPSAnQ29sdW1ucyc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHByaXZhdGUgc29ydDogYm9vbGVhbiA9IHRydWUsXG5cdFx0XHRcdHByaXZhdGUgZmlsdGVyOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHByaXZhdGUgY29sdW1uc01hbmFnZXI6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQgJiZcblx0XHRcdCh0aGlzLnNvcnQgfHwgdGhpcy5maWx0ZXIgfHwgdGhpcy5jb2x1bW5zTWFuYWdlcik7XG5cdH1cblxuXHRpc01haW5FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnQ7XG5cdH1cblxuXHRpc1NvcnRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnQ7XG5cdH1cblxuXHRpc0ZpbHRlcmluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyO1xuXHR9XG5cblx0aXNDb2x1bW5NYW5hZ2VyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zTWFuYWdlcjtcblx0fVxuXG5cdGdldE1lbnVzKCk6IEFycmF5PHN0cmluZz4ge1xuXG5cdFx0Y29uc3QgbWVudXMgPSBbXTtcblxuXHRcdGlmICh0aGlzLmlzTWFpbkVuYWJsZWQoKSkge1xuXHRcdFx0bWVudXMucHVzaCh0aGlzLmdldE1haW5NZW51KCkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRmlsdGVyaW5nRW5hYmxlZCgpKSB7XG5cdFx0XHRtZW51cy5wdXNoKHRoaXMuZ2V0RmlsdGVyTWVudSgpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0NvbHVtbk1hbmFnZXJFbmFibGVkKCkpIHtcblx0XHRcdG1lbnVzLnB1c2godGhpcy5nZXRDb2x1bW5NZW51KCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW51cztcblx0fVxuXG5cdGdldEFjdGl2ZU1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZW51cygpWzBdO1xuXHR9XG5cblx0Z2V0TWFpbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5NQUlOO1xuXHR9XG5cblx0Z2V0RmlsdGVyTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnLkZJTFRFUjtcblx0fVxuXG5cdGdldENvbHVtbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5DT0xVTU5TO1xuXHR9XG5cbn1cbiJdfQ==