/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from './data/data-type';
var Field = /** @class */ (function () {
    function Field(id, field, name) {
        this.id = id;
        this.field = field;
        this.name = name;
    }
    /**
     * @param {?} id
     * @param {?} dataField
     * @param {?} name
     * @return {?}
     */
    Field.of = /**
     * @param {?} id
     * @param {?} dataField
     * @param {?} name
     * @return {?}
     */
    function (id, dataField, name) {
        return new Field(id, dataField, name);
    };
    /**
     * @return {?}
     */
    Field.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    /**
     * @return {?}
     */
    Field.prototype.getKey = /**
     * @return {?}
     */
    function () {
        return this.getId().toString();
    };
    /**
     * @return {?}
     */
    Field.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.field.getDataType();
    };
    /**
     * @return {?}
     */
    Field.prototype.getName = /**
     * @return {?}
     */
    function () {
        return this.name;
    };
    /**
     * @deprecated
     */
    /**
     * @deprecated
     * @return {?}
     */
    Field.prototype.getField = /**
     * @deprecated
     * @return {?}
     */
    function () {
        return this.field;
    };
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    Field.prototype.getAccessor = /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    function () {
        return this.field.getAccessor();
    };
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    Field.prototype.getAccessorMethod = /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    function () {
        return this.field.getAccessorMethod();
    };
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    Field.prototype.getSearchAccessorMethod = /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    function () {
        return this.field.getSearchAccessorMethod();
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    Field.prototype.getValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.field.getValue(entity);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Field.prototype.getDisplayValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return ((/** @type {?} */ (this.field))).getDisplayValue(value);
    };
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @param {?} type
     * @return {?}
     */
    Field.prototype.isSummaries = /**
     * Probably should not be used.
     *
     * @deprecated
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.field.isSummaries(type);
    };
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    Field.prototype.isSummariesEnabled = /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    function () {
        return this.field.isSummariesEnabled();
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    Field.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        return this.field.search(item, searchPhrase);
    };
    /**
     * @param {?} item
     * @param {?} filterPhrase
     * @return {?}
     */
    Field.prototype.filter = /**
     * @param {?} item
     * @param {?} filterPhrase
     * @return {?}
     */
    function (item, filterPhrase) {
        /** @type {?} */
        var value = this.field.getValue(item);
        if (this.field.getDataType() === DataType.NUMBER) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.BOOLEAN) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.STRING) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.DATE) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else {
            return true;
        }
    };
    /**
     * @param {?} entityOne
     * @param {?} entityTwo
     * @param {?} direction
     * @return {?}
     */
    Field.prototype.sort = /**
     * @param {?} entityOne
     * @param {?} entityTwo
     * @param {?} direction
     * @return {?}
     */
    function (entityOne, entityTwo, direction) {
        /** @type {?} */
        var valueOne = direction ? this.field.getSortValue(entityOne) : this.field.getSortValue(entityTwo);
        /** @type {?} */
        var valueTwo = direction ? this.field.getSortValue(entityTwo) : this.field.getSortValue(entityOne);
        if (this.field.getDataType() === DataType.NUMBER) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.BOOLEAN) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.STRING) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.DATE) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else {
            return 0;
        }
    };
    return Field;
}());
export { Field };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Field.prototype.id;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.field;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBVzVDO0lBWUMsZUFBWSxFQUFXLEVBQ3BCLEtBQXFCLEVBQ3JCLElBQVk7UUFDZCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFoQk0sUUFBRTs7Ozs7O0lBQVQsVUFBVSxFQUFXLEVBQUUsU0FBeUIsRUFBRSxJQUFZO1FBQzdELE9BQU8sSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBZ0JELHFCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsc0JBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDJCQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsdUJBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx3QkFBUTs7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsMkJBQVc7Ozs7OztJQUFYO1FBQ0MsT0FBTyxJ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bXBvcnQgeyBEYXRhRmllbGRUeXBlcyB9IGZyb20gJy4vZGF0YS9kYXRhLWZpZWxkLXR5cGVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBOdW1iZXJEYXRhRmllbGQgfSBmcm9tICcuL2RhdGEvdHlwZS9udW1iZXItZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBCb29sZWFuRGF0YUZpZWxkIH0gZnJvbSAnLi9kYXRhL3R5cGUvYm9vbGVhbi1kYXRhLWZpZWxkJztcbmltcG9ydCB7IFN0cmluZ0RhdGFGaWVsZCB9IGZyb20gJy4vZGF0YS90eXBlL3N0cmluZy1kYXRhLWZpZWxkJztcbmltcG9ydCB7IERhdGVEYXRhRmllbGQgfSBmcm9tICcuL2RhdGEvdHlwZS9kYXRlLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQuaWQnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3N1bW1hcmllcy50eXBlJztcblxuXG5leHBvcnQgY2xhc3MgRmllbGQge1xuXG5cdHN0YXRpYyBvZihpZDogRmllbGRJZCwgZGF0YUZpZWxkOiBEYXRhRmllbGRUeXBlcywgbmFtZTogc3RyaW5nKTogRmllbGQge1xuXHRcdHJldHVybiBuZXcgRmllbGQoaWQsIGRhdGFGaWVsZCwgbmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBGaWVsZElkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmllbGQ6IERhdGFGaWVsZFR5cGVzO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRmaWVsZDogRGF0YUZpZWxkVHlwZXMsXG5cdFx0XHRcdG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxuXG5cdGdldElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0Z2V0S2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SWQoKS50b1N0cmluZygpO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmdldERhdGFUeXBlKCk7XG5cdH1cblxuXHRnZXROYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0RmllbGQoKTogRGF0YUZpZWxkVHlwZXMge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2JhYmx5IHNob3VsZCBub3QgYmUgdXNlZC5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGdldEFjY2Vzc29yKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0QWNjZXNzb3IoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9iYWJseSBzaG91bGQgbm90IGJlIHVzZWQuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRBY2Nlc3Nvck1ldGhvZCgpOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmdldEFjY2Vzc29yTWV0aG9kKCk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvYmFibHkgc2hvdWxkIG5vdCBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0U2VhcmNoQWNjZXNzb3JNZXRob2QoKTogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRTZWFyY2hBY2Nlc3Nvck1ldGhvZCgpO1xuXHR9XG5cblx0Z2V0VmFsdWUoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRWYWx1ZShlbnRpdHkpO1xuXHR9XG5cblx0Z2V0RGlzcGxheVZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuXHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBhbnkpLmdldERpc3BsYXlWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvYmFibHkgc2hvdWxkIG5vdCBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0aXNTdW1tYXJpZXModHlwZTogU3VtbWFyaWVzVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmlzU3VtbWFyaWVzKHR5cGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2JhYmx5IHNob3VsZCBub3QgYmUgdXNlZC5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGlzU3VtbWFyaWVzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5pc1N1bW1hcmllc0VuYWJsZWQoKTtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLnNlYXJjaChpdGVtLCBzZWFyY2hQaHJhc2UpO1xuXHR9XG5cblx0ZmlsdGVyKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIGZpbHRlclBocmFzZTogYW55KTogYm9vbGVhbiB7XG5cblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBOdW1iZXJEYXRhRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIEJvb2xlYW5EYXRhRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgU3RyaW5nRGF0YUZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBEYXRlRGF0YUZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHNvcnQoZW50aXR5T25lOiBPcmlnaW5JdGVtRW50aXR5LCBlbnRpdHlUd286IE9yaWdpbkl0ZW1FbnRpdHksIGRpcmVjdGlvbjogYm9vbGVhbik6IG51bWJlciB7XG5cblx0XHRsZXQgdmFsdWVPbmUgPSBkaXJlY3Rpb24gPyB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlPbmUpIDogdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5VHdvKSxcblx0XHRcdHZhbHVlVHdvID0gZGlyZWN0aW9uID8gdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5VHdvKSA6IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eU9uZSk7XG5cblx0XHRpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBOdW1iZXJEYXRhRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIEJvb2xlYW5EYXRhRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgU3RyaW5nRGF0YUZpZWxkKS5zb3J0KHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBEYXRlRGF0YUZpZWxkKS5zb3J0KHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=