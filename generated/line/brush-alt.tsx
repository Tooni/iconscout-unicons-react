import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBrushAlt = (
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
    <path d="M12 18a1 1 0 1 0 1 1 1 1 0 0 0-1-1m6-17H6a1 1 0 0 0-1 1v9a3 3 0 0 0 3 3h1v2.37a4 4 0 1 0 6 0V14h1a3 3 0 0 0 3-3V2a1 1 0 0 0-1-1m-6 20a2 2 0 0 1-1.33-3.48 1 1 0 0 0 .33-.74V14h2v2.78a1 1 0 0 0 .33.74A2 2 0 0 1 12 21m5-10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1h10Zm0-3H7V3h10Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBrushAlt)
export default ForwardRef
