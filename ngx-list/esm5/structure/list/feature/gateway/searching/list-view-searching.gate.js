/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { SearchCommandDispatcher } from '../../../../search/domain-api/search.command-dispatcher';
import { SearchEventRepository } from '../../../../search/domain-api/search.event-repository';
var ListViewSearchingGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewSearchingGate, _super);
    function ListViewSearchingGate(structureId, searchCommandDispatcher, searchEventRepository) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.searchCommandDispatcher = searchCommandDispatcher;
        _this.searchEventRepository = searchEventRepository;
        _this.searchPhraseChanged = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ListViewSearchingGate.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        if (this.isDefined('searching', simpleChanges)) {
            this.searchCommandDispatcher.setSearchingConfig(this.searching, this.structureId);
        }
    };
    /**
     * @return {?}
     */
    ListViewSearchingGate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.searchEventRepository
            .onSearchPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) {
            _this.searchPhraseChanged.emit(phrase);
        }));
    };
    ListViewSearchingGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[searching]'
                },] }
    ];
    /** @nocollapse */
    ListViewSearchingGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: SearchCommandDispatcher },
        { type: SearchEventRepository }
    ]; };
    ListViewSearchingGate.propDecorators = {
        searching: [{ type: Input }],
        searchPhraseChanged: [{ type: Output }]
    };
    return ListViewSearchingGate;
}(Gate));
export { ListViewSearchingGate };
if (false) {
    /** @type {?} */
    ListViewSearchingGate.prototype.searching;
    /** @type {?} */
    ListViewSearchingGate.prototype.searchPhraseChanged;
    /**
     * @type {?}
     * @private
     */
    ListViewSearchingGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewSearchingGate.prototype.searchCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    ListViewSearchingGate.prototype.searchEventRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGV3YXkvc2VhcmNoaW5nL2xpc3Qtdmlldy1zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0UsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRzlGO0lBRzJDLGlEQUFJO0lBUTlDLCtCQUE2QixXQUF3QixFQUNqQyx1QkFBZ0QsRUFDaEQscUJBQTRDO1FBRmhFLFlBR0MsaUJBQU8sU0FDUDtRQUo0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFKaEUseUJBQW1CLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBTS9ELENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLGFBQTRCO1FBRXZDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0YsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLHFCQUFxQjthQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQWM7WUFDekIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWpDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtpQkFDcEM7Ozs7Z0JBVFEsV0FBVztnQkFHWCx1QkFBdUI7Z0JBQ3ZCLHFCQUFxQjs7OzRCQVE1QixLQUFLO3NDQUdMLE1BQU07O0lBMkJSLDRCQUFDO0NBQUEsQUFuQ0QsQ0FHMkMsSUFBSSxHQWdDOUM7U0FoQ1kscUJBQXFCOzs7SUFFakMsMENBQ3dCOztJQUV4QixvREFDK0Q7Ozs7O0lBRW5ELDRDQUF5Qzs7Ozs7SUFDbEQsd0RBQWlFOzs7OztJQUNqRSxzREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2dhdGUnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2RvbWFpbi1hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2RvbWFpbi1hcGkvc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnknO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbc2VhcmNoaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTZWFyY2hpbmdHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IFNlYXJjaENvbmZpZztcblxuXHRAT3V0cHV0KClcblx0c2VhcmNoUGhyYXNlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZERpc3BhdGNoZXI6IFNlYXJjaENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaEV2ZW50UmVwb3NpdG9yeTogU2VhcmNoRXZlbnRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnc2VhcmNoaW5nJywgc2ltcGxlQ2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZERpc3BhdGNoZXIuc2V0U2VhcmNoaW5nQ29uZmlnKHRoaXMuc2VhcmNoaW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNlYXJjaEV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uU2VhcmNoUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5zZWFyY2hQaHJhc2VDaGFuZ2VkLmVtaXQocGhyYXNlKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==