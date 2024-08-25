import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSlack = (
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
    <g data-name="Brand Logos">
      <path
        d="M9.338 2a2 2 0 0 0 .001 4h1.996V4a2 2 0 0 0-1.997-2m0 5.333H4.016a2 2 0 0 0 0 4h5.322a2 2 0 0 0 0-4"
        opacity={1}
      />
      <path
        d="M21.98 9.333a1.996 1.996 0 1 0-3.993 0v2h1.997a2 2 0 0 0 1.996-2m-5.323 0V4a1.996 1.996 0 1 0-3.992 0v5.333a1.996 1.996 0 1 0 3.992 0"
        opacity={0.25}
      />
      <path
        d="M14.661 22a2 2 0 0 0 0-4h-1.996v2a2 2 0 0 0 1.996 2m0-5.334h5.323a2 2 0 0 0 0-4h-5.322a2 2 0 0 0-.001 4"
        opacity={0.7}
      />
      <path
        d="M2.02 14.666a1.996 1.996 0 1 0 3.993 0v-2H4.016a2 2 0 0 0-1.996 2m5.323 0V20a1.996 1.996 0 1 0 3.992 0v-5.332a1.996 1.996 0 1 0-3.992-.002"
        opacity={0.5}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgSlack)
export default ForwardRef
