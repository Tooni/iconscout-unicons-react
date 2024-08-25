import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWrench = (
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
    <path d="m21.71 15.58-4.52-4.51a7 7 0 0 0 .14-1.4A7.67 7.67 0 0 0 6.42 2.72a1 1 0 0 0-.57.74 1 1 0 0 0 .28.88l4.35 4.34-1.8 1.8-4.34-4.35a1 1 0 0 0-.88-.27 1 1 0 0 0-.74.56 7.67 7.67 0 0 0 7 10.91 7 7 0 0 0 1.4-.14l4.51 4.52a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-4.9-4.9a1 1 0 0 0-.95-.26 6 6 0 0 1-1.48.2A5.67 5.67 0 0 1 4 9.67a6 6 0 0 1 .08-1L8 12.6a1 1 0 0 0 1.42 0l3.18-3.21a1 1 0 0 0 0-1.39L8.71 4.08a6 6 0 0 1 1-.08 5.67 5.67 0 0 1 5.66 5.67 6 6 0 0 1-.2 1.48 1 1 0 0 0 .26.95l4.9 4.9a1 1 0 0 0 1.42-1.42Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgWrench)
export default ForwardRef
