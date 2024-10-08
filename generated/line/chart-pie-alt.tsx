import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgChartPieAlt = (
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
    <path d="M19 12h-7V5c0-.6-.4-1-1-1-5 0-9 4-9 9s4 9 9 9 9-4 9-9c0-.6-.4-1-1-1m-7 7.9c-3.8.6-7.4-2.1-7.9-5.9-.6-3.8 2.1-7.4 5.9-7.9V13c0 .6.4 1 1 1h6.9c-.4 3.1-2.8 5.5-5.9 5.9M15 2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6c.6 0 1-.4 1-1 0-3.9-3.1-7-7-7m1 6V4.1c2 .4 3.5 1.9 3.9 3.9z" />
  </svg>
)
const ForwardRef = forwardRef(SvgChartPieAlt)
export default ForwardRef
