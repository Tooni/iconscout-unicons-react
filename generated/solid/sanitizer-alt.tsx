import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSanitizerAlt = (
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
    <path d="M16 8V5c0-.6-.4-1-1-1h-1V3h1c.6 0 1-.4 1-1s-.4-1-1-1h-4.8C8.5 1 6.9 2 6.1 3.6c-.2.4 0 1 .5 1.3.5.2 1.1 0 1.3-.4.4-.9 1.3-1.5 2.3-1.5H12v1h-1c-.6 0-1 .4-1 1v3c-1.7 0-3 1.3-3 3v9c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-9c0-1.7-1.3-3-3-3m-4-2h2v2h-2zm2 11h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgSanitizerAlt)
export default ForwardRef
