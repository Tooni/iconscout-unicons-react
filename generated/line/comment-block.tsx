import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCommentBlock = (
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
    <path d="M19 14a1 1 0 0 0-1.22.72A7 7 0 0 1 11 20H5.41l.64-.63a1 1 0 0 0 0-1.41 7 7 0 0 1 3.2-11.74 1 1 0 0 0-.5-1.94A9 9 0 0 0 4 18.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h8a9 9 0 0 0 8.72-6.75A1 1 0 0 0 19 14m1.54-10.54A5 5 0 1 0 22 7a5 5 0 0 0-1.46-3.54M14 7a3 3 0 0 1 3-3 3 3 0 0 1 1.29.3l-4 4A3 3 0 0 1 14 7m5.12 2.12a3.08 3.08 0 0 1-3.4.57l4-4A3 3 0 0 1 20 7a3 3 0 0 1-.88 2.12" />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentBlock)
export default ForwardRef
