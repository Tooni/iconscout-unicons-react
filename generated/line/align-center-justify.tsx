import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAlignCenterJustify = (
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
    <path d="M21 15H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2M3 5h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m14 14H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m4-12H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0 4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignCenterJustify)
export default ForwardRef
