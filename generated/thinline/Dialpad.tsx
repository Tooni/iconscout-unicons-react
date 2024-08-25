import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDialpad = (
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
    <path d="M7 10H3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 7 10m-.5 4h-3v-3h3zM7 3H3a.5.5 0 0 0-.5.5v4A.5.5 0 0 0 3 8h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 7 3m-.5 4h-3V4h3zM14 3h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 14 3m-.5 4h-3V4h3zM21 3h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 21 3m-.5 4h-3V4h3zM14 17h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-.5 4h-3v-3h3zM21 10h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-.5 4h-3v-3h3zM14 10h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-.5 4h-3v-3h3z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDialpad)
export default ForwardRef
