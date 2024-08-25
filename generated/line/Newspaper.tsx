import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgNewspaper = (
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
    <path d="M17 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m0 4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-6-6h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2m10-6H7a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h13a4 4 0 0 0 4-4V4a1 1 0 0 0-1-1M6 18a1 1 0 0 1-2 0V9h2Zm14-1a2 2 0 0 1-2 2H7.82A3 3 0 0 0 8 18V5h12Zm-9-4h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2m0 4h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgNewspaper)
export default ForwardRef
