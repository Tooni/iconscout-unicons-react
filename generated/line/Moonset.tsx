import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMoonset = (
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
    <path d="M11 19H8a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m9-4h-1.16A8.2 8.2 0 0 0 20 12.05a1 1 0 0 0-.34-.93 1 1 0 0 0-1-.19 6 6 0 0 1-1.92.32 6.06 6.06 0 0 1-6.06-6 7 7 0 0 1 .1-1 1 1 0 0 0-.35-.92 1 1 0 0 0-1-.18A8.06 8.06 0 0 0 4 10.68 8 8 0 0 0 5.27 15H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2m-3.72 0H7.83a6 6 0 0 1 .88-9.36 8.06 8.06 0 0 0 8.05 7.61 7 7 0 0 0 .79 0A6.1 6.1 0 0 1 16.28 15M16 19h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgMoonset)
export default ForwardRef
