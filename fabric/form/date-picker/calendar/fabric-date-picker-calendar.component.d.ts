import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FabricDatePickerService } from '../fabric-date-picker.service';
import { FabricDatePickerWeeks } from './weeks/fabric-date-picker.weeks';
import { FabricDatePickerYears } from './years/fabric-date-picker.years';
export declare class FabricDatePickerCalendarComponent implements OnChanges, OnInit, OnDestroy {
    private datePickerService;
    private datePickerWeeks;
    private datePickerYears;
    private changeDetectorRef;
    currentDay: Date;
    daysOfTheWeek: string[];
    weeks: Array<Array<Date>>;
    quarters: Array<Array<any>>;
    years: Array<Array<number>>;
    selectDate: Date;
    selectedMonth: number;
    selectedMonthName: string;
    selectedYear: number;
    private selectedDateSubscription;
    private monthSubscription;
    private yearSubscription;
    private enableMonthSelection;
    private enableYearSelection;
    constructor(datePickerService: FabricDatePickerService, datePickerWeeks: FabricDatePickerWeeks, datePickerYears: FabricDatePickerYears, changeDetectorRef: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    calculateDatePickerData(): void;
    prevCard(): void;
    nextCard(): void;
    onSelect(date: Date): void;
    switchViewedList(): "monthList" | "yearsList" | "daysList";
    displayMonthDays(day: number): boolean;
    isDateSelected(day: Date): boolean;
    isCurrentDay(day: Date): boolean;
    isCurrentMonth(month: number): boolean;
    isSelectedMonth(month: number): boolean;
    isYearSelected(year: number): boolean;
    isCurrentYear(year: number): boolean;
    selectYear(year: number): void;
    selectMonth(month: number): void;
    showMonthsList(): void;
    showYearsList(): void;
    getDisplayedYearRange(): string;
}
