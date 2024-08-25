import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgEllipsisH = (
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
    <path d="M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2m-7 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2m14 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgEllipsisH)
export default ForwardRef
