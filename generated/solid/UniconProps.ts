import { SVGProps } from 'react';
export interface UniconProps extends SVGProps<SVGElement> {
  /**
    * The color of the icon.
    * @default 'currentColor'
    */
  color?: string;
  /**
    * The size of the icon, can be a string or a number.
    * @default 24
    */
  size?: string | number;
}
