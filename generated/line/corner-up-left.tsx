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
    <path d="M14.69 6.63h-7l2.92-2.92a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0L4.61 6.92a1 1 0 0 0-.22.33 1 1 0 0 0 0 .76 1.2 1.2 0 0 0 .22.33L9.24 13a1 1 0 0 0 .7.3 1 1 0 0 0 .71-1.71L7.73 8.63h7a3 3 0 0 1 3 3V21a1 1 0 0 0 2 0v-9.37a5 5 0 0 0-5.04-5" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerUpLeft)
export default ForwardRef
