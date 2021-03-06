/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FILTERED_COMMAND_STREAM } from './filtered-command-stream';
/**
 * @template C
 */
var CommandBus = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBus, _super);
    function CommandBus(commandsStream) {
        var _this = _super.call(this) || this;
        if (commandsStream) {
            _this.source = commandsStream;
        }
        return _this;
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    CommandBus.prototype.lift = /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    function (operator) {
        /** @type {?} */
        var observable = new CommandBus();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * @template C2
     * @param {...?} commandTypes
     * @return {?}
     */
    CommandBus.prototype.ofCommand = /**
     * @template C2
     * @param {...?} commandTypes
     * @return {?}
     */
    function () {
        var commandTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            commandTypes[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return commandTypes.some((/**
             * @param {?} commandType
             * @return {?}
             */
            function (commandType) { return command.ofMessageType(commandType); }));
        })));
    };
    /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    CommandBus.prototype.ofCommandHandler = /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    function () {
        var handlers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            handlers[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) { return handler.forCommand(command); }));
        })));
    };
    /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    CommandBus.prototype.ofCreateAggregateHandler = /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    function () {
        var handlers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            handlers[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) { return handler.forCommand(command); }));
        })));
    };
    /**
     * @template C2
     * @param {?} handlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    CommandBus.prototype.ofNullHandler = /**
     * @template C2
     * @param {?} handlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    function (handlers, aggregateCommandHandlers) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            if (!handlers) {
                return true;
            }
            return !handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) { return handler.forCommand(command); })) &&
                !aggregateCommandHandlers.some((/**
                 * @param {?} handler
                 * @return {?}
                 */
                function (handler) { return handler.forCommand(command); }));
        })));
    };
    CommandBus.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CommandBus.ctorParameters = function () { return [
        { type: Subject, decorators: [{ type: Inject, args: [FILTERED_COMMAND_STREAM,] }] }
    ]; };
    return CommandBus;
}(Observable));
export { CommandBus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5idXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQVksT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU1wRTtJQUM2QyxzQ0FBYTtJQUV6RCxvQkFBNkMsY0FBaUM7UUFBOUUsWUFDQyxpQkFBTyxTQUtQO1FBSEEsSUFBSSxjQUFjLEVBQUU7WUFDbkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7U0FDN0I7O0lBQ0YsQ0FBQzs7Ozs7O0lBRUQseUJBQUk7Ozs7O0lBQUosVUFBUSxRQUF3Qjs7WUFDekIsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFLO1FBQ3RDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELDhCQUFTOzs7OztJQUFUO1FBQXdCLHNCQUE4QjthQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7WUFBOUIsaUNBQThCOztRQUNyRCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUN2QixPQUFPLFlBQVksQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxXQUFtQixJQUFLLE9BQUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBbEMsQ0FBa0MsRUFBQyxDQUFDO1FBQ3ZGLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxxQ0FBZ0I7Ozs7O0lBQWhCO1FBQStCLGtCQUF3RjthQUF4RixVQUF3RixFQUF4RixxQkFBd0YsRUFBeEYsSUFBd0Y7WUFBeEYsNkJBQXdGOztRQUN0SCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUN2QixPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxPQUE2RSxJQUFLLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO1FBQ3RJLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCw2Q0FBd0I7Ozs7O0lBQXhCO1FBQXVDLGtCQUErRjthQUEvRixVQUErRixFQUEvRixxQkFBK0YsRUFBL0YsSUFBK0Y7WUFBL0YsNkJBQStGOztRQUNySSxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUN2QixPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxPQUFvRixJQUFLLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO1FBQzdJLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRUQsa0NBQWE7Ozs7OztJQUFiLFVBQTRCLFFBQXFGLEVBQUUsd0JBQW9IO1FBQ3RPLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLE9BQWdCO1lBRXZCLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2QsT0FBTyxJQUFJLENBQUM7YUFDWjtZQUVELE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsT0FBNkUsSUFBSyxPQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLEVBQUM7Z0JBQ3BJLENBQUMsd0JBQXdCLENBQUMsSUFBSTs7OztnQkFBQyxVQUFDLE9BQTRGLElBQUssT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixFQUFDLENBQUM7UUFDaEssQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQTFERCxVQUFVOzs7O2dCQVZvQixPQUFPLHVCQWF4QixNQUFNLFNBQUMsdUJBQXVCOztJQXlENUMsaUJBQUM7Q0FBQSxBQTVERCxDQUM2QyxVQUFVLEdBMkR0RDtTQTNEWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvciwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi9jb21tYW5kJztcbmltcG9ydCB7IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNIH0gZnJvbSAnLi9maWx0ZXJlZC1jb21tYW5kLXN0cmVhbSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9hZ2dyZWdhdGUvY3JlYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vYWdncmVnYXRlLWlkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbW1hbmRCdXM8QyA9IENvbW1hbmQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxDPiB7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChGSUxURVJFRF9DT01NQU5EX1NUUkVBTSkgY29tbWFuZHNTdHJlYW0/OiBTdWJqZWN0PENvbW1hbmQ+KSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGlmIChjb21tYW5kc1N0cmVhbSkge1xuXHRcdFx0dGhpcy5zb3VyY2UgPSBjb21tYW5kc1N0cmVhbTtcblx0XHR9XG5cdH1cblxuXHRsaWZ0PFI+KG9wZXJhdG9yOiBPcGVyYXRvcjxDLCBSPik6IE9ic2VydmFibGU8Uj4ge1xuXHRcdGNvbnN0IG9ic2VydmFibGUgPSBuZXcgQ29tbWFuZEJ1czxSPigpO1xuXHRcdG9ic2VydmFibGUuc291cmNlID0gdGhpcztcblx0XHRvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0cmV0dXJuIG9ic2VydmFibGU7XG5cdH1cblxuXHRvZkNvbW1hbmQ8QzIgZXh0ZW5kcyBDPiguLi5jb21tYW5kVHlwZXM6IEFycmF5PHN0cmluZz4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbW1hbmRUeXBlcy5zb21lKChjb21tYW5kVHlwZTogc3RyaW5nKSA9PiBjb21tYW5kLm9mTWVzc2FnZVR5cGUoY29tbWFuZFR5cGUpKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZkNvbW1hbmRIYW5kbGVyPEMyIGV4dGVuZHMgQz4oLi4uaGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+Pik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZD4pID0+IGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0b2ZDcmVhdGVBZ2dyZWdhdGVIYW5kbGVyPEMyIGV4dGVuZHMgQz4oLi4uaGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxhbnksIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPj4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxhbnksIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPikgPT4gaGFuZGxlci5mb3JDb21tYW5kKGNvbW1hbmQpKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZk51bGxIYW5kbGVyPEMyIGV4dGVuZHMgQz4oaGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+PiwgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPj4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cblx0XHRcdFx0XHRpZiAoIWhhbmRsZXJzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gIWhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+KSA9PiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCkpICYmXG5cdFx0XHRcdFx0XHQhYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+KSA9PiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG59XG4iXX0=