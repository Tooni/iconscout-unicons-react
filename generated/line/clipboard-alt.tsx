import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgClipboardAlt = (
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
    <path d="M15 14H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m0-4h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m2-6h-1.18A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.82 2H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-7 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm8 14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6h1a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgClipboardAlt)
export default ForwardRef
