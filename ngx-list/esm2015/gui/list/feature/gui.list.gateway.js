/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { GuiListPagingConverter } from './paging/gui-list.paging.converter';
import { GuiListCardComponent } from './card/gui.list-card.component';
import { GuiListModeConverter } from './mode/gui-list.mode.converter';
import { ListViewCardTemplate } from '../../../structure/list/feature/card/template/list-view.card-template';
import { ListViewTemplate } from '../../../structure/list/feature/source/template/list-view-template';
/**
 * @abstract
 */
export class GuiListGateway {
    constructor() {
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
        this.searchPhraseChanged = new EventEmitter();
        this.guiListPagingConverter = new GuiListPagingConverter();
        this.guiListModeConverter = new GuiListModeConverter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const templateRef = this.listItem ? this.listItem.templateRef : null;
        this.containerTemplate = new ListViewTemplate(this.template, templateRef);
        /** @type {?} */
        const cardTemplateRef = this.listCard ? this.listCard.templateRef : null;
        this.listCardTemplate = new ListViewCardTemplate(this.cardTemplate, cardTemplateRef);
        if (changes.paging !== undefined && changes.paging.currentValue !== undefined) {
            if (typeof this.paging !== 'boolean') {
                this.paging = this.guiListPagingConverter.convert(this.paging);
            }
        }
        if (changes.view !== undefined && changes.view.currentValue !== undefined) {
            if (this.view.active !== undefined) {
                this.listViewMode = this.guiListModeConverter.convert(this.view.active);
            }
            if (this.view.selector !== undefined) {
                this.listViewModeSelector = this.view.selector;
            }
        }
        if (changes.fields !== undefined && changes.fields.currentValue !== undefined) {
            this.listFields = this.fields.map((/**
             * @param {?} f
             * @return {?}
             */
            (f) => {
                return {
                    field: f.field,
                    type: (/** @type {?} */ (f.type)) // DataType
                };
            }));
        }
        if (changes.searching !== undefined && changes.searching.currentValue !== undefined) {
            this.searchConfig = (/** @type {?} */ (this.searching));
        }
    }
}
GuiListGateway.propDecorators = {
    listItem: [{ type: ContentChild, args: [GuiListItemComponent, { static: true },] }],
    listCard: [{ type: ContentChild, args: [GuiListCardComponent, { static: true },] }],
    source: [{ type: Input }],
    template: [{ type: Input }],
    cardTemplate: [{ type: Input }],
    paging: [{ type: Input }],
    view: [{ type: Input }],
    fields: [{ type: Input }],
    searching: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }],
    searchPhraseChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GuiListGateway.prototype.listItem;
    /** @type {?} */
    GuiListGateway.prototype.listCard;
    /** @type {?} */
    GuiListGateway.prototype.source;
    /** @type {?} */
    GuiListGateway.prototype.template;
    /** @type {?} */
    GuiListGateway.prototype.cardTemplate;
    /** @type {?} */
    GuiListGateway.prototype.paging;
    /** @type {?} */
    GuiListGateway.prototype.view;
    /** @type {?} */
    GuiListGateway.prototype.fields;
    /** @type {?} */
    GuiListGateway.prototype.searching;
    /** @type {?} */
    GuiListGateway.prototype.pageChanged;
    /** @type {?} */
    GuiListGateway.prototype.pageSizeChanged;
    /** @type {?} */
    GuiListGateway.prototype.searchPhraseChanged;
    /** @type {?} */
    GuiListGateway.prototype.containerTemplate;
    /** @type {?} */
    GuiListGateway.prototype.listCardTemplate;
    /** @type {?} */
    GuiListGateway.prototype.listViewMode;
    /** @type {?} */
    GuiListGateway.prototype.listViewModeSelector;
    /** @type {?} */
    GuiListGateway.prototype.guiListPagingConverter;
    /** @type {?} */
    GuiListGateway.prototype.guiListModeConverter;
    /** @type {?} */
    GuiListGateway.prototype.listFields;
    /** @type {?} */
    GuiListGateway.prototype.searchConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQzs7OztBQU10RyxNQUFNLE9BQWdCLGNBQWM7SUFBcEM7UUE4QkMsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUcvRCxvQkFBZSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBR25FLHdCQUFtQixHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBVXZFLDJCQUFzQixHQUEyQixJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFFOUUseUJBQW9CLEdBQXlCLElBQUksb0JBQW9CLEVBQUUsQ0FBQztJQW9EekUsQ0FBQzs7Ozs7SUE5Q0EsV0FBVyxDQUFDLE9BQXNCOztjQUUzQixXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFFcEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksZ0JBQWdC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Q2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2d1aS5saXN0LWl0ZW0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3VpTGlzdEZpZWxkLCBHdWlMaXN0UGFnaW5nLCBHdWlMaXN0U2VhcmNoaW5nLCBHdWlMaXN0VmlldyB9IGZyb20gJy4uL2RvbWFpbi1hcGkvZ3VpLmxpc3QucHVibGljLWFwaSc7XG5pbXBvcnQgeyBHdWlMaXN0UGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi9wYWdpbmcvZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlMaXN0Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9ndWkubGlzdC1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWlMaXN0TW9kZUNvbnZlcnRlciB9IGZyb20gJy4vbW9kZS9ndWktbGlzdC5tb2RlLmNvbnZlcnRlcic7XG5cbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jYXJkL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL3NvdXJjZS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluLWFwaS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC1jb25maWcnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHdWlMaXN0R2F0ZXdheSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QENvbnRlbnRDaGlsZChHdWlMaXN0SXRlbUNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcblx0bGlzdEl0ZW06IEd1aUxpc3RJdGVtQ29tcG9uZW50O1xuXG5cdEBDb250ZW50Q2hpbGQoR3VpTGlzdENhcmRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGxpc3RDYXJkOiBHdWlMaXN0Q2FyZENvbXBvbmVudDtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT47XG5cblx0QElucHV0KClcblx0dGVtcGxhdGU6IChpdGVtOiBhbnkpID0+IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRjYXJkVGVtcGxhdGU6IChpdGVtOiBhbnkpID0+IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IGJvb2xlYW4gfCBHdWlMaXN0UGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHZpZXc6IEd1aUxpc3RWaWV3O1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkczogQXJyYXk8R3VpTGlzdEZpZWxkPjtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IEd1aUxpc3RTZWFyY2hpbmc7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdHNlYXJjaFBocmFzZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0Y29udGFpbmVyVGVtcGxhdGU6IExpc3RWaWV3VGVtcGxhdGU7XG5cblx0bGlzdENhcmRUZW1wbGF0ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGU7XG5cblx0bGlzdFZpZXdNb2RlOiBMaXN0Vmlld01vZGU7XG5cblx0bGlzdFZpZXdNb2RlU2VsZWN0b3I6IGJvb2xlYW47XG5cblx0Z3VpTGlzdFBhZ2luZ0NvbnZlcnRlcjogR3VpTGlzdFBhZ2luZ0NvbnZlcnRlciA9IG5ldyBHdWlMaXN0UGFnaW5nQ29udmVydGVyKCk7XG5cblx0Z3VpTGlzdE1vZGVDb252ZXJ0ZXI6IEd1aUxpc3RNb2RlQ29udmVydGVyID0gbmV3IEd1aUxpc3RNb2RlQ29udmVydGVyKCk7XG5cblx0bGlzdEZpZWxkczogQXJyYXk8RmllbGRDb25maWc+O1xuXG5cdHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGNvbnN0IHRlbXBsYXRlUmVmID0gdGhpcy5saXN0SXRlbSA/IHRoaXMubGlzdEl0ZW0udGVtcGxhdGVSZWYgOiBudWxsO1xuXG5cdFx0dGhpcy5jb250YWluZXJUZW1wbGF0ZSA9IG5ldyBMaXN0Vmlld1RlbXBsYXRlKHRoaXMudGVtcGxhdGUsIHRlbXBsYXRlUmVmKTtcblxuXHRcdGNvbnN0IGNhcmRUZW1wbGF0ZVJlZiA9IHRoaXMubGlzdENhcmQgPyB0aGlzLmxpc3RDYXJkLnRlbXBsYXRlUmVmIDogbnVsbDtcblxuXHRcdHRoaXMubGlzdENhcmRUZW1wbGF0ZSA9IG5ldyBMaXN0Vmlld0NhcmRUZW1wbGF0ZSh0aGlzLmNhcmRUZW1wbGF0ZSwgY2FyZFRlbXBsYXRlUmVmKTtcblxuXHRcdGlmIChjaGFuZ2VzLnBhZ2luZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucGFnaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgIT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHRoaXMuZ3VpTGlzdFBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucGFnaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy52aWV3ICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy52aWV3LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGlmICh0aGlzLnZpZXcuYWN0aXZlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5saXN0Vmlld01vZGUgPSB0aGlzLmd1aUxpc3RNb2RlQ29udmVydGVyLmNvbnZlcnQodGhpcy52aWV3LmFjdGl2ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnZpZXcuc2VsZWN0b3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmxpc3RWaWV3TW9kZVNlbGVjdG9yID0gdGhpcy52aWV3LnNlbGVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuZmllbGRzICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5maWVsZHMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0dGhpcy5saXN0RmllbGRzID0gdGhpcy5maWVsZHMubWFwKChmKSA9PiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZmllbGQ6IGYuZmllbGQsXG5cdFx0XHRcdFx0dHlwZTogZi50eXBlIGFzIGFueSAvLyBEYXRhVHlwZVxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuc2VhcmNoaW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5zZWFyY2hpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0dGhpcy5zZWFyY2hDb25maWcgPSB0aGlzLnNlYXJjaGluZyBhcyBTZWFyY2hDb25maWc7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19