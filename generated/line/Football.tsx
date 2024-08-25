import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFootball = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M20.07 6.11a9.85 9.85 0 0 0-4.3-3.36A10 10 0 0 0 2 12v.56A9.94 9.94 0 0 0 3.33 17a10 10 0 0 0 5.89 4.65A10.1 10.1 0 0 0 12 22a9.5 9.5 0 0 0 1.88-.18 10 10 0 0 0 8-8.41A9.5 9.5 0 0 0 22 12a9.83 9.83 0 0 0-1.93-5.89m-2 .77L17 9.74l-1.62.44L13 8.49V6.64l2.49-1.81a7.8 7.8 0 0 1 2.62 2.05ZM14 11.67 13.22 14h-2.45L10 11.67l2-1.43ZM12 4a8 8 0 0 1 1.11.09l-1.11.8-1.11-.8A8 8 0 0 1 12 4M4.88 8.37l.4 1.32-1.13.79a7.9 7.9 0 0 1 .73-2.11m1.37 9.17 1.38.05.37 1.33a8.3 8.3 0 0 1-1.75-1.38M8 15.6l-3.15-.11A7.8 7.8 0 0 1 4.07 13l2.49-1.74 1.44.62.89 2.76Zm.86-5.53-1.56-.7-.91-3A8 8 0 0 1 8.5 4.83L11 6.64v1.85ZM13 19.93a8.1 8.1 0 0 1-2.63-.12l-.83-2.92.83-.89h3.07l.67 1Zm2.41-.7.46-1.23 1.36.07a7.8 7.8 0 0 1-1.85 1.16Zm3.46-3.12L15.76 16l-.71-1.1.89-2.76 1.51-.41 2.36 2a7.8 7.8 0 0 1-.97 2.38Zm.05-5.83L19.4 9a7.4 7.4 0 0 1 .53 2.13Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgFootball)
export default ForwardRef
