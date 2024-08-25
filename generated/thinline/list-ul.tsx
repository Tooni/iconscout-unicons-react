import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgListUl = (
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
    <path d="M3.5 12a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m3-4h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1m-3 9a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m18-5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1m-18-5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m18 10h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgListUl)
export default ForwardRef
