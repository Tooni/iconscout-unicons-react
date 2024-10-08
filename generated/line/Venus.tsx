import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgVenus = (
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
    <path d="M19 9a7 7 0 1 0-8 6.92V18h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-2.08A7 7 0 0 0 19 9m-7 5a5 5 0 1 1 5-5 5 5 0 0 1-5 5" />
  </svg>
)
const ForwardRef = forwardRef(SvgVenus)
export default ForwardRef
