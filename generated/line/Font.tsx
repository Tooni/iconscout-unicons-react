import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFont = (
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
    <path d="M21 20h-1V3a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-.86.5L4.43 20H3a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-.26l3.5-6H18v6h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-3-8h-6.59l4.66-8H18Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgFont)
export default ForwardRef
