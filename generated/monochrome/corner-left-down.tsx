import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerLeftDown = (
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
    <path
      d="M21 4.314h-9.372a5.006 5.006 0 0 0-5 5v6.957l-2.921-2.92a1 1 0 0 0-1.414 1.413l4.628 4.628a1.003 1.003 0 0 0 1.415 0l4.628-4.628a1 1 0 0 0-1.414-1.414l-2.922 2.922V9.314a3.003 3.003 0 0 1 3-3H21a1 1 0 0 0 0-2"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerLeftDown)
export default ForwardRef
