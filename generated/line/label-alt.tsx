import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLabelAlt = (
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
    <path d="M15 12a1 1 0 1 0 1-1 1 1 0 0 0-1 1m6.71-.71-5-5A1 1 0 0 0 16 6H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11a1 1 0 0 0 .71-.29l5-5a1 1 0 0 0 0-1.42M15.59 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10.59l4 4Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgLabelAlt)
export default ForwardRef
