import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPuzzlePiece = (
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
    <path d="M17 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a4 4 0 0 1 7.3-2.18A3.86 3.86 0 0 1 14 6h3a1 1 0 0 1 1 1v3a4 4 0 0 1 2.18 7.3A3.86 3.86 0 0 1 18 18v3a1 1 0 0 1-1 1M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11v-3.18a1 1 0 0 1 .42-.82 1 1 0 0 1 .91-.13 1.77 1.77 0 0 0 1.74-.23 2 2 0 0 0 .93-1.37 2 2 0 0 0-.48-1.59 1.89 1.89 0 0 0-2.17-.55 1 1 0 0 1-.91-.13 1 1 0 0 1-.42-.82V8h-3.2a1 1 0 0 1-1-1.33 1.77 1.77 0 0 0-.23-1.74 1.94 1.94 0 0 0-3-.43A2 2 0 0 0 8 6a1.9 1.9 0 0 0 .13.67A1 1 0 0 1 7.18 8Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgPuzzlePiece)
export default ForwardRef
