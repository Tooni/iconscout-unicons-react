import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgStarHalfAlt = (
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
    <path d="M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16 2.86 9a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67 5.1 2.67a.93.93 0 0 0 .46.12 1 1 0 0 0 .59-.19 1 1 0 0 0 .4-1l-1-5.68 4.13-4A1 1 0 0 0 22 9.67M11 17l-3.23 1.7.72-4.2a1 1 0 0 0-.29-.88l-3-3 4.21-.61a1 1 0 0 0 .76-.55L11 7.73Zm4.8-3.38a1 1 0 0 0-.29.88l.72 4.2L13 17V7.73l.88 1.79a1 1 0 0 0 .76.55l4.21.61Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgStarHalfAlt)
export default ForwardRef
