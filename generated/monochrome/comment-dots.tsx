import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCommentDots = (
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
    <circle cx={12} cy={12} r={1} opacity={1} />
    <path
      d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20M8 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1"
      opacity={0.5}
    />
    <circle cx={8} cy={12} r={1} opacity={1} />
    <circle cx={16} cy={12} r={1} opacity={1} />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentDots)
export default ForwardRef
