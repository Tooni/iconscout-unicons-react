import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPrintSlash = (
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
    <path d="M7 10a1 1 0 1 0 1 1 1 1 0 0 0-1-1M3.71 2.29a1 1 0 0 0-1.42 1.42L4.62 6A3 3 0 0 0 2 9v6a3 3 0 0 0 3 3h1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.59l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM6 15v1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.59l6 6H7a1 1 0 0 0-1 1m10 5H8v-4h6.59L16 17.41Zm3-14h-1V3a1 1 0 0 0-1-1H8.66a1 1 0 0 0 0 2H16v2h-3.34a1 1 0 0 0 0 2H19a1 1 0 0 1 1 1v6a.4.4 0 0 1 0 .11 1 1 0 0 0 .78 1.18h.2a1 1 0 0 0 1-.8A3 3 0 0 0 22 15V9a3 3 0 0 0-3-3" />
  </svg>
)
const ForwardRef = forwardRef(SvgPrintSlash)
export default ForwardRef
