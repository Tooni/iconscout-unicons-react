import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgNotes = (
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
    <path d="M16 14H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m0-4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m4-6h-3V3a1 1 0 0 0-2 0v1h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H4a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1m-1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6h2v1a1 1 0 0 0 2 0V6h2v1a1 1 0 0 0 2 0V6h2v1a1 1 0 0 0 2 0V6h2Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgNotes)
export default ForwardRef
