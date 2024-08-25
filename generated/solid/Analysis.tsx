import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAnalysis = (
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
    <path d="M21.7 7.3c-.4-.4-1-.4-1.4 0L14 13.6 9.7 9.3C9.5 9.1 9.3 9 9 9s-.5.1-.7.3l-6 6c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3L9 11.4l4.3 4.3c.1.1.2.2.3.2.1.1.3.1.4.1.2 0 .5-.1.6-.3h.1l7-7c.4-.4.4-1 0-1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgAnalysis)
export default ForwardRef
