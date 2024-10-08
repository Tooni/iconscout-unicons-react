import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCloudCheck = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M14.29 14.19 11 17.48l-1.29-1.29a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l2 2a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0m4.13-5.87a7 7 0 0 0-13.36 1.9 4 4 0 0 0-.38 7.65A1 1 0 1 0 5.32 16 2 2 0 0 1 4 14.1a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.6 1 1 0 0 0 .78.66 3 3 0 0 1 .24 5.84 1 1 0 0 0 .25 2h.25a5 5 0 0 0 .17-9.62Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCloudCheck)
export default ForwardRef
