import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWebcam = (
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
    <path d="M12 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1m9.59 9.16A10 10 0 0 0 19 13.89a8 8 0 1 0-14 0 9.9 9.9 0 0 0-2.6 4.27 3 3 0 0 0 .47 2.63A3 3 0 0 0 5.3 22h13.4a3 3 0 0 0 2.42-1.21 3 3 0 0 0 .47-2.63M12 4a6 6 0 1 1-6 6 6 6 0 0 1 6-6m7.52 15.59a1 1 0 0 1-.82.41H5.3a1 1 0 0 1-.82-.41 1 1 0 0 1-.15-.87 7.85 7.85 0 0 1 1.88-3.22 8 8 0 0 0 11.58 0 7.85 7.85 0 0 1 1.88 3.22 1 1 0 0 1-.15.87" />
  </svg>
)
const ForwardRef = forwardRef(SvgWebcam)
export default ForwardRef
