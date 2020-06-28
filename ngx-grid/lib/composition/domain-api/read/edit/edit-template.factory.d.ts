import { ComponentFactoryResolver } from '@angular/core';
import { TemplateFactory } from '../template/template.factory';
import { EditTemplatesComponent } from './edit-templates.component';
import { DataType } from '../../../../../structure/field/domain/core/field/data/data-type';
export declare class EditTemplateFactory extends TemplateFactory<EditTemplatesComponent> {
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    generateMapKeys(): Array<DataType>;
}
