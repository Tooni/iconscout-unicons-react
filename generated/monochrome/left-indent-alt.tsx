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
    <path
      d="M21 19h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0-4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0-8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0 4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2"
      opacity={0.5}
    />
    <path
      d="M9 19a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m-4-4.333a1 1 0 0 1-.64-.231l-2-1.667a1 1 0 0 1 0-1.538l2-1.667a1 1 0 0 1 1.28 1.538L4.562 12l1.078.898A1 1 0 0 1 5 14.667"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLeftIndentAlt)
export default ForwardRef
