import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSlack = (
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
    <path d="M2 14.67a2 2 0 1 0 4 0v-2H4a2 2 0 0 0-2 2m12.64-3.34a2 2 0 0 0 2-2V4a2 2 0 1 0-4 0v5.33a2 2 0 0 0 2.02 2Zm7.32-2a2 2 0 1 0-4 0v2h2a2 2 0 0 0 2.04-2ZM9.34 12.67a2 2 0 0 0-2 2V20a2 2 0 1 0 4 0v-5.33a2 2 0 0 0-2-2M14.66 18h-2v2a2 2 0 1 0 2-2M20 12.67h-5.34a2 2 0 0 0 0 4H20a2 2 0 0 0 0-4M9.34 7.33H4a2 2 0 1 0 0 4h5.34a2 2 0 0 0 0-4m0-5.33a2 2 0 0 0 0 4h2V4a2 2 0 0 0-2-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgSlack)
export default ForwardRef
