import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBookAlt = (
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
    <path d="M18 2H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M6 6a2 2 0 0 1 2-2h10v10H8a3.9 3.9 0 0 0-2 .56Zm2 14a2 2 0 0 1 0-4h10v4Zm2-12h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgBookAlt)
export default ForwardRef
