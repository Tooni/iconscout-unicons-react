import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLightbulb = (
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
    <path d="M17.45 12.46a7 7 0 0 0-1-9.83 7.09 7.09 0 0 0-5.92-1.4 7 7 0 0 0-4 11.15 4.76 4.76 0 0 1 1.08 2.86v.29a2 2 0 0 0-.61 1.4v2a2 2 0 0 0 2 2v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1a2 2 0 0 0 2-2v-2a2 2 0 0 0-.57-1.4v-.43a4.26 4.26 0 0 1 1.02-2.64M9 18.93v-2h6v2Zm6.89-7.72a6.18 6.18 0 0 0-1.46 3.72H9.56a6.67 6.67 0 0 0-1.5-3.78 5 5 0 0 1 2.84-8A5 5 0 0 1 17 8.07a4.92 4.92 0 0 1-1.11 3.14" />
  </svg>
)
const ForwardRef = forwardRef(SvgLightbulb)
export default ForwardRef
