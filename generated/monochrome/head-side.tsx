import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHeadSide = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path
      d="M18.5 22h-9a1 1 0 0 1-1-1v-2h-1a2 2 0 0 1-2-2v-2h-1a1 1 0 0 1-.904-1.426L5.5 9.53V9.5a7.44 7.44 0 0 1 2.277-5.383 7.37 7.37 0 0 1 5.453-2.114 7.7 7.7 0 0 1 7.27 7.77V10a1 1 0 0 1-.033.256l-1.93 7.266.924 3.2A1 1 0 0 1 18.5 22"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHeadSide)
export default ForwardRef