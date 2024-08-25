import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHorizontalAlignLeft = (
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
    <path d="M21.5 11H16V6.5a.5.5 0 0 0-.5-.5H3V2.5a.5.5 0 0 0-1 0v19a.5.5 0 1 0 1 0V18h18.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5M3 7h12v4H3zm18 10H3v-5h18z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHorizontalAlignLeft)
export default ForwardRef