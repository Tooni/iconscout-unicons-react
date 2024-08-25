import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPlug = (
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
    <path d="M19 6h-3V3a1 1 0 0 0-2 0v3h-4V3a1 1 0 0 0-2 0v3H5a1 1 0 0 0 0 2h1v5a1 1 0 0 0 .29.71L9 16.41V21a1 1 0 0 0 2 0v-4h2v4a1 1 0 0 0 2 0v-4.59l2.71-2.7A1 1 0 0 0 18 13V8h1a1 1 0 0 0 0-2m-3 6.59L13.59 15h-3.18L8 12.59V8h8ZM11 13h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgPlug)
export default ForwardRef
