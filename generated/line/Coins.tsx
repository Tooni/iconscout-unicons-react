import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCoins = (
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
    <path d="M21.22 12a3 3 0 0 0 .78-2 3 3 0 0 0-3-3h-5.18A3 3 0 0 0 11 3H5a3 3 0 0 0-3 3 3 3 0 0 0 .78 2 3 3 0 0 0 0 4 3 3 0 0 0 0 4A3 3 0 0 0 2 18a3 3 0 0 0 3 3h14a3 3 0 0 0 2.22-5 3 3 0 0 0 0-4M11 19H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m0-4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m0-4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m0-4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m8.69 11.71A.93.93 0 0 1 19 19h-5.18a2.87 2.87 0 0 0 0-2H19a1 1 0 0 1 1 1 1 1 0 0 1-.31.71m0-4A.93.93 0 0 1 19 15h-5.18a2.87 2.87 0 0 0 0-2H19a1 1 0 0 1 1 1 1 1 0 0 1-.31.71m0-4A.93.93 0 0 1 19 11h-5.18a2.87 2.87 0 0 0 0-2H19a1 1 0 0 1 1 1 1 1 0 0 1-.31.71" />
  </svg>
)
const ForwardRef = forwardRef(SvgCoins)
export default ForwardRef
