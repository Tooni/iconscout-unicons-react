import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLeftIndentAlt = (
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
    <path d="M9 5a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1m4 2h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2M5.77 9.69a1 1 0 0 0-1.41-.13l-2 1.67a1 1 0 0 0 0 1.54l2 1.67a1 1 0 0 0 1.41-.13 1 1 0 0 0-.13-1.41L4.56 12l1.08-.9a1 1 0 0 0 .13-1.41M21 9h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m0 4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m0 4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgLeftIndentAlt)
export default ForwardRef