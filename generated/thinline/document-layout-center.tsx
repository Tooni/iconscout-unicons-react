import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDocumentLayoutCenter = (
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
    <path d="M8.5 12h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5M9 5h6v6H9zm12.5 6h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-19-3h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1m16 0h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1m3 7h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m-19-3h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1m11 7h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentLayoutCenter)
export default ForwardRef
