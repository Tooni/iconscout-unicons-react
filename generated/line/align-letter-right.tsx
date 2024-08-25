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
    <path d="M10 4h11a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2m11 16H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-14H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0 10H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0-6H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignLetterRight)
export default ForwardRef
