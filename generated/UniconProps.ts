import type { SVGProps } from 'react';

export interface UniconProps extends SVGProps<SVGSVGElement> {
    /**
     * The size of the icon.
     * Passed down to the SVG's height and width attributes.
     * @default 24
     */
    size?: number | string;

    /**
     * The color of the icon.
     * @default 'currentColor'
     */
    color?: string;
}