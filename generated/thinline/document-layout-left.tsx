import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDocumentLayoutLeft = (
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
    <path d="M2.5 12h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5M3 5h6v6H3zm9.5 3h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1m9 7h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m-8 4h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m8-8h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentLayoutLeft)
export default ForwardRef
