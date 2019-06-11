import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
export declare abstract class AbstractSpinner implements OnChanges, OnInit {
    protected elementRef: ElementRef;
    protected renderer: Renderer2;
    width: number;
    diameter: number;
    primary: boolean;
    secondary: boolean;
    outline: boolean;
    r: number;
    circumference: number;
    croppedCircle: number;
    circleSize: number;
    protected constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    private calculateCircle;
    private calculateCircumference;
    private calculateR;
    private calculateDashes;
    private calculateSize;
    protected addClass(className: string): void;
    protected removeClass(className: string): void;
}
