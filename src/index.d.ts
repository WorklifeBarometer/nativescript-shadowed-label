import { CssProperty } from '@nativescript/core/ui/core/properties';
import { ShadowedLabel as Common } from './shadowed-label.common';
import { Color } from '@nativescript/core/color';
import { dip } from '@nativescript/core/ui/core/view';
import { Style } from "@nativescript/core";

export declare class ShadowedLabel extends Common {
    textShadow: any;
}

export declare const textShadowProperty: CssProperty<Style, TextShadow>;

export interface TextShadow {
    offsetX: dip;
    offsetY: dip;
    blurRadius: dip;
    color: Color;
}
