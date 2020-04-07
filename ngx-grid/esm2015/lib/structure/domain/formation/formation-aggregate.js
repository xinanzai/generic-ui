/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FormationAggregate {
    /**
     * In the future this class can be responsible for managing:
     * - expanded / collapsed nodes
     * - sorting?
     * - filtering?
     * @param {?} selectedRows
     */
    constructor(selectedRows) {
        this.selectedRows = selectedRows;
    }
    /**
     * @return {?}
     */
    getSelectedRows() {
        return this.selectedRows;
    }
    /**
     * @param {?} selectedRow
     * @return {?}
     */
    toggleRow(selectedRow) {
        if (this.selectedRows.length > 0) {
            if (this.selectedRows[0] === selectedRow) {
                this.selectedRows = [];
                return;
            }
        }
        this.selectedRows = [selectedRow];
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationAggregate.prototype.selectedRows;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vZm9ybWF0aW9uL2Zvcm1hdGlvbi1hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7O0lBUzlCLFlBQW9CLFlBQTJCO1FBQTNCLGlCQUFZLEdBQVosWUFBWSxDQUFlO0lBQy9DLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFdBQW1CO1FBRTVCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBRWpDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixPQUFPO2FBQ1A7U0FDRDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0Q7Ozs7OztJQW5CWSwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRm9ybWF0aW9uQWdncmVnYXRlIHtcblxuXHQvKipcblx0ICogSW4gdGhlIGZ1dHVyZSB0aGlzIGNsYXNzIGNhbiBiZSByZXNwb25zaWJsZSBmb3IgbWFuYWdpbmc6XG5cdCAqIC0gZXhwYW5kZWQgLyBjb2xsYXBzZWQgbm9kZXNcblx0ICogLSBzb3J0aW5nP1xuXHQgKiAtIGZpbHRlcmluZz9cblx0ICovXG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZWxlY3RlZFJvd3M6IEFycmF5PHN0cmluZz4pIHtcblx0fVxuXG5cdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZFJvd3M7XG5cdH1cblxuXHR0b2dnbGVSb3coc2VsZWN0ZWRSb3c6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSb3dzWzBdID09PSBzZWxlY3RlZFJvdykge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cyA9IFtdO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWxlY3RlZFJvd3MgPSBbc2VsZWN0ZWRSb3ddO1xuXHR9XG59XG4iXX0=