import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBehanceAlt = (
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
    <g opacity={1} data-name="Brand Logos">
      <path d="M7.5 20H2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h5.5a4.5 4.5 0 0 1 0 9M3 18h4.5a2.5 2.5 0 0 0 0-5H3Z" />
      <path d="M7 13H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5a4 4 0 0 1 0 8m-4-2h4a2 2 0 0 0 0-4H3zm17-4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m2 7h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2" />
      <path d="M18 20a5.006 5.006 0 0 1-5-5v-2a5 5 0 1 1 10 0 1 1 0 0 1-2 0 3 3 0 0 0-6 0v2a2.998 2.998 0 0 0 5.9.754 1 1 0 0 1 1.94.492A4.985 4.985 0 0 1 18 20" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgBehanceAlt)
export default ForwardRef
