import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTablets = (
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
    <path d="M20.54 3.46a5 5 0 1 0 0 7.08 5 5 0 0 0 0-7.08m-5.66 1.42A3 3 0 0 1 17 4a3 3 0 0 1 1.28.3l-4 4a3 3 0 0 1 .6-3.42m4.24 4.24a3 3 0 0 1-3.4.58l4-4a3 3 0 0 1-.6 3.42M8 10a5.93 5.93 0 0 0-4.21 1.73A6 6 0 0 0 8 22a6 6 0 0 0 4.14-1.66l.12-.08a1 1 0 0 1 .07-.11A6 6 0 0 0 8 10m-2.83 8.83A4 4 0 0 1 4.56 14L10 19.44a4 4 0 0 1-4.83-.61m6.27-.83L6 12.56A4 4 0 0 1 8 12a4 4 0 0 1 3.44 6" />
  </svg>
)
const ForwardRef = forwardRef(SvgTablets)
export default ForwardRef
