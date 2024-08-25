import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRulerCombined = (
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
    <path d="M21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V10h11.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5M21 9h-3.5V6.5a.5.5 0 0 0-1 0V9h-3V6.5a.5.5 0 0 0-1 0V9H10V6.5a.5.5 0 0 0-1 0V9H6.5a.5.5 0 0 0 0 1H9v2.5H6.5a.5.5 0 0 0 0 1H9v3H6.5a.5.5 0 0 0 0 1H9V21H3V3h18z" />
  </svg>
)
const ForwardRef = forwardRef(SvgRulerCombined)
export default ForwardRef
