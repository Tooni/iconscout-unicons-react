import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWifi = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M12 15a3 3 0 1 0 3 3 3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1m0-8a7.06 7.06 0 0 0-4.95 2.05 1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0 5 5 0 0 1 7.08 0 1 1 0 0 0 .7.3 1 1 0 0 0 .76-1.71A7.06 7.06 0 0 0 12 11m0-4a11.08 11.08 0 0 0-7.78 3.22 1 1 0 0 0 1.42 1.42 9 9 0 0 1 12.72 0 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42A11.08 11.08 0 0 0 12 7m10.61.39a15 15 0 0 0-21.22 0 1 1 0 0 0 1.42 1.42 13 13 0 0 1 18.38 0 1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42" />
  </svg>
)
const ForwardRef = forwardRef(SvgWifi)
export default ForwardRef
