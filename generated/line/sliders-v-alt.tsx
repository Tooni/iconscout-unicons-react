import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSlidersVAlt = (
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
    <path d="M20 8.18V3a1 1 0 0 0-2 0v5.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-7.18a3 3 0 0 0 0-5.64M19 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1m-6 2.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64M12 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1M6 6.18V3a1 1 0 0 0-2 0v3.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-9.18a3 3 0 0 0 0-5.64M5 10a1 1 0 1 1 1-1 1 1 0 0 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgSlidersVAlt)
export default ForwardRef