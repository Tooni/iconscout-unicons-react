import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgShieldSlash = (
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
    <path d="m21.71 20.29-16-16-2-2a1 1 0 0 0-1.42 1.42L4 5.41v6.47a9 9 0 0 0 3.77 7.32l3.65 2.61a1 1 0 0 0 1.16 0l3.65-2.61a8 8 0 0 0 .86-.7l3.2 3.21a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42m-6.64-2.71L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88V7.41l9.67 9.68c-.19.17-.39.33-.6.49m-5-12.51A10 10 0 0 0 12 4.19a9.82 9.82 0 0 0 6 1.39v6.3a7 7 0 0 1-.1 1.18 1 1 0 0 0 .83 1.15h.16a1 1 0 0 0 1-.84 10 10 0 0 0 .12-1.5V4.43a1 1 0 0 0-.37-.77 1 1 0 0 0-.83-.21 7.9 7.9 0 0 1-6.23-1.27 1 1 0 0 0-1.14 0 8 8 0 0 1-2 1 1 1 0 1 0 .64 1.9Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgShieldSlash)
export default ForwardRef
