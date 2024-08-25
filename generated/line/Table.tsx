import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTable = (
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
    <path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M8 20H4v-4h4Zm0-6H4v-4h4Zm0-6H4V4h4Zm6 12h-4v-4h4Zm0-6h-4v-4h4Zm0-6h-4V4h4Zm6 12h-4v-4h4Zm0-6h-4v-4h4Zm0-6h-4V4h4Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgTable)
export default ForwardRef
