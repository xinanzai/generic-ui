/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, skip, take, takeUntil } from 'rxjs/operators';
import { FabricDatePickerCalendarComponent } from './calendar/fabric-date-picker-calendar.component';
import { FabricDatePickerService } from './fabric-date-picker.service';
import { FabricDatePickerInlineDialogService } from './fabric.date-picker-inline-dialog.service';
export class FabricDatePickerComponent {
    /**
     * @param {?} fabricDatePickerInlineDialogService
     * @param {?} datePickerService
     * @param {?} formBuilder
     * @param {?} changeDetectorRef
     */
    constructor(fabricDatePickerInlineDialogService, datePickerService, formBuilder, changeDetectorRef) {
        this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
        this.datePickerService = datePickerService;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.openDialog = false;
        this.onlyDialog = false;
        this.dateSelected = new EventEmitter();
        this.dialogOpened = new EventEmitter();
        this.unsub$ = new Subject();
        this.datePickerForm = formBuilder.group({
            'date': ['']
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.selectDate) {
            this.datePickerService.dateSelected(this.selectDate);
        }
        if (changes.onlyDialog !== null) {
            this.inputDisabled = this.onlyDialog ? 'disabled' : '';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.datePickerSubscription =
            this.datePickerService
                .observeSelectedDate()
                .pipe(take(1), distinctUntilChanged(), takeUntil(this.unsub$))
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            (date) => {
                this.pickedDate = date;
                this.dateSelected.emit(date);
            }));
        this.datePickerService
            .observeSelectedDate()
            .pipe(skip(1), takeUntil(this.unsub$))
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            this.pickedDate = date;
            this.dateSelected.emit(date);
            this.changeDetectorRef.detectChanges();
            this.fabricDatePickerInlineDialogService.close();
        }));
        this.fabricDatePickerInlineDialogService
            .onOpened()
            .pipe(skip(1), takeUntil(this.unsub$))
            .subscribe((/**
         * @param {?} opened
         * @return {?}
         */
        (opened) => {
            this.dialogOpened.emit(opened);
        }));
        this.observeDayChanges();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.openDialog) {
            this.openDatePicker();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.datePickerSubscription.unsubscribe();
        this.datePickerDaySubscription.unsubscribe();
        this.unsub$.next();
        this.unsub$.complete();
        this.fabricDatePickerInlineDialogService.close();
    }
    /**
     * @return {?}
     */
    openDatePicker() {
        if (!this.parentElement) {
            this.parentElement = this.datePickerRef;
        }
        this.fabricDatePickerInlineDialogService.open(this.parentElement, FabricDatePickerCalendarComponent);
    }
    /**
     * @private
     * @return {?}
     */
    observeDayChanges() {
        this.datePickerDaySubscription =
            this.datePickerForm
                .controls['date']
                .valueChanges
                .pipe(distinctUntilChanged(), 
            // debounceTime(1000),
            map((/**
             * @param {?} day
             * @return {?}
             */
            (day) => this.parse(day))), takeUntil(this.unsub$))
                .subscribe((/**
             * @param {?} day
             * @return {?}
             */
            (day) => {
                this.datePickerService.dateSelected(day);
            }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        if ((typeof value === 'string') && (value.includes('/'))) {
            /** @type {?} */
            const str = value.split('/');
            /** @type {?} */
            const year = +str[2];
            /** @type {?} */
            const month = +str[1] - 1;
            /** @type {?} */
            const date = +str[0];
            return new Date(year, month, date);
        }
        else {
            return this.pickedDate;
        }
    }
}
FabricDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker',
                template: "<div #datePicker class=\"gui-date-picker\">\n\t<form [formGroup]=\"datePickerForm\">\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: 'dd/MM/yyyy'\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input>\n\t</form>\n\t<div (click)=\"openDatePicker()\" class=\"gui-date-picker-icon\"></div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-date-picker{display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center}.gui-date-picker input{background:0 0;font-family:Arial;font-size:14px;padding:4px;border-radius:0;border-width:0 0 1px}.gui-date-picker input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABHSURBVDhPY0AGERER/6FMnABdDSOIIEYjNrBixQpGJiibbECxAWBAjhdgegbeCygGgJwFw1AhgmA0FgaDARRnJiiTXMDAAABL+xpWANMN2gAAAABJRU5ErkJggg==);position:absolute;right:0;height:16px;width:16px;cursor:pointer;opacity:.8}.gui-date-picker .gui-date-picker-icon:hover{opacity:1}", ".gui-dark .gui-input{background:0 0}.gui-dark .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACNSURBVDhPY0AGe/fu/Q9l4gToahhBBC6NbOzsDP//szDcuP6Qwcxcg+HtmzdQGQhwdnZmZIKysYJfP38xCPBzM1hZ6zL8+PEDKooK8BrAwPCf4fXrVwyvXr5g+PrlC1QMCyDG7+gApoeACwgD6hoAchYMQ4UIgoH3AhgMo1ggB+DNTIQAKDNBmeQCBgYAklU89fLLqHkAAAAASUVORK5CYII=)}.gui-dark .gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface button{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-selected-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-selected-year span{border-color:#ce93d8}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-current-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-current-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-current-year span{background:#757575}"]
            }] }
];
/** @nocollapse */
FabricDatePickerComponent.ctorParameters = () => [
    { type: FabricDatePickerInlineDialogService },
    { type: FabricDatePickerService },
    { type: FormBuilder },
    { type: ChangeDetectorRef }
];
FabricDatePickerComponent.propDecorators = {
    datePickerRef: [{ type: ViewChild, args: ['datePicker', { static: false },] }],
    parentElement: [{ type: Input }],
    selectDate: [{ type: Input }],
    name: [{ type: Input }],
    openDialog: [{ type: Input }],
    onlyDialog: [{ type: Input }],
    dateSelected: [{ type: Output }],
    dialogOpened: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerRef;
    /** @type {?} */
    FabricDatePickerComponent.prototype.parentElement;
    /** @type {?} */
    FabricDatePickerComponent.prototype.selectDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.name;
    /** @type {?} */
    FabricDatePickerComponent.prototype.openDialog;
    /** @type {?} */
    FabricDatePickerComponent.prototype.onlyDialog;
    /** @type {?} */
    FabricDatePickerComponent.prototype.dateSelected;
    /** @type {?} */
    FabricDatePickerComponent.prototype.dialogOpened;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerForm;
    /** @type {?} */
    FabricDatePickerComponent.prototype.pickedDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.inputDisabled;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerSubscription;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerDaySubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.unsub$;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.fabricDatePickerInlineDialogService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.datePickerService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFhakcsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7OztJQXFDckMsWUFBNkIsbUNBQXdFLEVBQ2pGLGlCQUEwQyxFQUMxQyxXQUF3QixFQUN4QixpQkFBb0M7UUFIM0Isd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUFxQztRQUNqRixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUF6QnhELGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUc1QixpQkFBWSxHQUFHLElB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QUNGLENBQUM7OztZQXJLRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMFpBQWtEO2dCQUtsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7O1lBWlEsbUNBQW1DO1lBRG5DLHVCQUF1QjtZQUx2QixXQUFXO1lBWm5CLGlCQUFpQjs7OzRCQWlDaEIsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NEJBR3pDLEtBQUs7eUJBR0wsS0FBSzttQkFHTCxLQUFLO3lCQUdMLEtBQUs7eUJBR0wsS0FBSzsyQkFHTCxNQUFNOzJCQUdOLE1BQU07Ozs7SUFyQlAsa0RBQzBCOztJQUUxQixrREFDMEI7O0lBRTFCLCtDQUNpQjs7SUFFakIseUNBQ2E7O0lBRWIsK0NBQzRCOztJQUU1QiwrQ0FDNEI7O0lBRTVCLGlEQUNrQzs7SUFFbEMsaURBQ2tDOztJQUVsQyxtREFBMEI7O0lBRTFCLCtDQUFpQjs7SUFFakIsa0RBQStCOztJQUUvQiwyREFBcUM7O0lBQ3JDLDhEQUF3Qzs7Ozs7SUFFeEMsMkNBQXdDOzs7OztJQUU1Qix3RUFBeUY7Ozs7O0lBQ2xHLHNEQUEyRDs7Ozs7SUFDM0QsZ0RBQXlDOzs7OztJQUN6QyxzREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNraXAsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1kYXRlLXBpY2tlci5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1kYXRlLXBpY2tlci5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGVQaWNrZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0ZGF0ZVBpY2tlclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRwYXJlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdERhdGU6IERhdGU7XG5cblx0QElucHV0KClcblx0bmFtZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdG9wZW5EaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRvbmx5RGlhbG9nOiBib29sZWFuID0gZmFsc2U7XG5cblx0QE91dHB1dCgpXG5cdGRhdGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0ZGlhbG9nT3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGRhdGVQaWNrZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0cGlja2VkRGF0ZTogRGF0ZTtcblxuXHRpbnB1dERpc2FibGVkOiAnZGlzYWJsZWQnIHwgJyc7XG5cblx0ZGF0ZVBpY2tlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRkYXRlUGlja2VyRGF5U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YiQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0XHQnZGF0ZSc6IFsnJ11cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5kYXRlU2VsZWN0ZWQodGhpcy5zZWxlY3REYXRlKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5vbmx5RGlhbG9nICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmlucHV0RGlzYWJsZWQgPSB0aGlzLm9ubHlEaWFsb2cgPyAnZGlzYWJsZWQnIDogJyc7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5kYXRlUGlja2VyU3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Vcblx0XHRcdFx0Lm9ic2VydmVTZWxlY3RlZERhdGUoKVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWIkKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0KGRhdGU6IERhdGUpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMucGlja2VkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGVTZWxlY3RlZC5lbWl0KGRhdGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblxuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Vcblx0XHRcdC5vYnNlcnZlU2VsZWN0ZWREYXRlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRza2lwKDEpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YiQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGlja2VkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdFx0dGhpcy5kYXRlU2VsZWN0ZWQuZW1pdChkYXRlKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlXG5cdFx0XHQub25PcGVuZWQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHNraXAoMSksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3ViJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG9wZW5lZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmRpYWxvZ09wZW5lZC5lbWl0KG9wZW5lZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMub2JzZXJ2ZURheUNoYW5nZXMoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAodGhpcy5vcGVuRGlhbG9nKSB7XG5cdFx0XHR0aGlzLm9wZW5EYXRlUGlja2VyKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5kYXRlUGlja2VyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy5kYXRlUGlja2VyRGF5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblxuXHRcdHRoaXMuZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdG9wZW5EYXRlUGlja2VyKCkge1xuXHRcdGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmRhdGVQaWNrZXJSZWY7XG5cdFx0fVxuXHRcdHRoaXMuZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2Uub3Blbih0aGlzLnBhcmVudEVsZW1lbnQsIEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVEYXlDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVBpY2tlckRheVN1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtXG5cdFx0XHRcdC5jb250cm9sc1snZGF0ZSddXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0XHQvLyBkZWJvdW5jZVRpbWUoMTAwMCksXG5cdFx0XHRcdFx0bWFwKChkYXk6IHN0cmluZykgPT4gdGhpcy5wYXJzZShkYXkpKSxcblx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YiQpXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHQoZGF5OiBEYXRlKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmRhdGVTZWxlY3RlZChkYXkpO1xuXHRcdFx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZSh2YWx1ZTogc3RyaW5nKTogRGF0ZSB7XG5cdFx0aWYgKCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSAmJiAodmFsdWUuaW5jbHVkZXMoJy8nKSkpIHtcblx0XHRcdGNvbnN0IHN0ciA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cblx0XHRcdGNvbnN0IHllYXIgPSArc3RyWzJdLFxuXHRcdFx0XHRtb250aCA9ICtzdHJbMV0gLSAxLFxuXHRcdFx0XHRkYXRlID0gK3N0clswXTtcblxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucGlja2VkRGF0ZTtcblx0XHR9XG5cdH1cblxufVxuXG4iXX0=