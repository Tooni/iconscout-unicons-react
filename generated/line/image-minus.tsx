import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgImageMinus = (
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
    <path d="M21 4.008h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2M19 8a1 1 0 0 0-1 1v5.392l-1.48-1.48a2.78 2.78 0 0 0-3.929 0l-.698.697-2.486-2.486a2.777 2.777 0 0 0-3.924 0L4 12.606V7a1 1 0 0 1 1-1h8a1 1 0 0 0 0-2H5a3.003 3.003 0 0 0-3 3v12a3.003 3.003 0 0 0 3 3h12a3.003 3.003 0 0 0 3-3V9a1 1 0 0 0-1-1M5 20a1 1 0 0 1-1-1v-3.566l2.897-2.897a.8.8 0 0 1 1.096 0l3.168 3.167c.009.01.012.022.02.03L15.448 20Zm13-1a.97.97 0 0 1-.179.537l-4.514-4.514.698-.698a.78.78 0 0 1 1.1 0L18 17.22Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgImageMinus)
export default ForwardRef
