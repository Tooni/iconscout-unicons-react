import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPlaneFly = (
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
    <path d="M23 9.32a1.06 1.06 0 0 0-.1-.76 4.93 4.93 0 0 0-6.75-1.8L14 8 9 5.65a1 1 0 0 0-.92 0l-3 1.73a1 1 0 0 0-.5.84 1 1 0 0 0 .46.87l3.3 2.08-1.74 1-4.78.58a1 1 0 0 0-.53 1.75l3.54 3.06a3 3 0 0 0 3.55.44L22.5 9.93a1 1 0 0 0 .5-.61m-15.53 7a1 1 0 0 1-1.2-.18l-1.9-1.63 2.73-.33a1 1 0 0 0 .38-.13l3.36-1.93a1 1 0 0 0 .5-.85 1 1 0 0 0-.47-.86l-3.3-2.09 1.1-.63 5 2.32a1 1 0 0 0 .92 0l2.56-1.48a3 3 0 0 1 3.36.29Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgPlaneFly)
export default ForwardRef
