import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCropAltRotateRight = (
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
    <path d="M16 4h-.59l.3-.29a1 1 0 1 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H16a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0V9a5 5 0 0 0-5-5m0 14h-1v-7a1 1 0 0 0-1-1H7V9a1 1 0 0 0-2 0v1H4a1 1 0 0 0 0 2h1v7a1 1 0 0 0 1 1h7v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m-3 0H7v-6h6Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCropAltRotateRight)
export default ForwardRef
