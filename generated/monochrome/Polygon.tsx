import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPolygon = (
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
    <path
      d="M16.5 20.794h-9a1 1 0 0 1-.866-.5l-4.5-7.794a1 1 0 0 1 0-1l4.5-7.794a1 1 0 0 1 .866-.5h9a1 1 0 0 1 .866.5l4.5 7.794a1 1 0 0 1 0 1l-4.5 7.794a1 1 0 0 1-.866.5"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPolygon)
export default ForwardRef
