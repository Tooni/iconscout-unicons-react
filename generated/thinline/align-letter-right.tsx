import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAlignLetterRight = (
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
    <path d="M9.5 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m12 17h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m0-4h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m0-6h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m0-4h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignLetterRight)
export default ForwardRef
