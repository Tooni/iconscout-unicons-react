import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerUpLeft = (
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
      d="M14.686 6.628H7.729l2.92-2.921a1 1 0 0 0-1.413-1.414L4.608 6.921a1.003 1.003 0 0 0 0 1.415l4.628 4.628a1 1 0 0 0 1.414-1.414L7.728 8.628h6.958a3.003 3.003 0 0 1 3 3V21a1 1 0 0 0 2 0v-9.372a5.006 5.006 0 0 0-5-5"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerUpLeft)
export default ForwardRef
