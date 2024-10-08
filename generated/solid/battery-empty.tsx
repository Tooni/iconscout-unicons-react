import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBatteryEmpty = (
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
    <path d="M21 10c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1m-4-3H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgBatteryEmpty)
export default ForwardRef
