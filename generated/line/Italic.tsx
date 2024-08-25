import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgItalic = (
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
    <path d="M17 6h-6a1 1 0 0 0 0 2h1.52l-3.2 8H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-1.52l3.2-8H17a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgItalic)
export default ForwardRef
