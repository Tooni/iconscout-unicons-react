import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHorizontalDistributionRight = (
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
    <path d="M19 2a1 1 0 0 0-1 1v1h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v1a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1m-1 16h-4V6h4ZM9 2a1 1 0 0 0-1 1v2H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1M8 17H6V7h2Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHorizontalDistributionRight)
export default ForwardRef
