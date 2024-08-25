import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWaterDropSlash = (
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
    <path d="m21.71 20.29-18-18a1 1 0 0 0-1.42 1.42l4 4a12.46 12.46 0 0 0-2 6.57A7.76 7.76 0 0 0 12 22a7.64 7.64 0 0 0 5.87-2.71l2.42 2.42a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42M12 20a5.76 5.76 0 0 1-5.75-5.75 10.3 10.3 0 0 1 1.47-5.11l8.74 8.73A5.67 5.67 0 0 1 12 20M10.85 5.24c.45-.42.85-.75 1.15-1 1.43 1.12 5.13 4.43 5.68 8.88a1 1 0 0 0 1 .88h.12a1 1 0 0 0 .87-1.11c-.78-6.43-6.85-10.55-7.1-10.72a1 1 0 0 0-1.12 0 19 19 0 0 0-1.96 1.61 1 1 0 0 0 1.36 1.46" />
  </svg>
)
const ForwardRef = forwardRef(SvgWaterDropSlash)
export default ForwardRef
