import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAlignCenterAlt = (
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
    <path d="M4.5 7h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1m17 4h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m-2 5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignCenterAlt)
export default ForwardRef
