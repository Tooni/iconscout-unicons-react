import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWatchAlt = (
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
    <path d="m17 8.61-1-5.77A1 1 0 0 0 15 2H9a1 1 0 0 0-1 .84L7 8.61a6 6 0 0 0 0 6.78l1 5.77A1 1 0 0 0 9 22h6a1 1 0 0 0 1-.84l1-5.77a6 6 0 0 0 0-6.78M9.85 4h4.3l.44 2.59a6 6 0 0 0-5.18 0Zm4.3 16h-4.3l-.44-2.59a6 6 0 0 0 5.18 0ZM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
  </svg>
)
const ForwardRef = forwardRef(SvgWatchAlt)
export default ForwardRef
