import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBitcoinSign = (
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
    <path d="M19 9a4 4 0 0 0-4-4V3a1 1 0 0 0-2 0v2h-2V3a1 1 0 0 0-2 0v2H6a1 1 0 0 0 0 2h1v10H6a1 1 0 0 0 0 2h3v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2a4 4 0 0 0 2.62-7A4 4 0 0 0 19 9m-4 8H9v-4h6a2 2 0 0 1 0 4m0-6H9V7h6a2 2 0 0 1 0 4" />
  </svg>
)
const ForwardRef = forwardRef(SvgBitcoinSign)
export default ForwardRef
