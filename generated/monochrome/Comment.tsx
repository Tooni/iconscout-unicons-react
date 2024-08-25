import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgComment = (
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
      d="M12 22H3a1 1 0 0 1-.707-1.707l1.964-1.964A10 10 0 1 1 12 22"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComment)
export default ForwardRef
