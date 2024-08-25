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
    <path d="M21.5 10a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5m-4-3h-14C2.672 7 2 7.672 2 8.5v7c0 .828.672 1.5 1.5 1.5h14c.828 0 1.5-.672 1.5-1.5v-7c0-.828-.672-1.5-1.5-1.5m.5 8.5c0 .276-.224.5-.5.5h-14a.5.5 0 0 1-.5-.5v-7c0-.276.224-.5.5-.5h14c.276 0 .5.224.5.5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBatteryEmpty)
export default ForwardRef
