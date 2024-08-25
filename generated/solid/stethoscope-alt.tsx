import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgStethoscopeAlt = (
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
    <path d="M21.8 10c-.4-1.2-1.6-2-2.8-2-1.7 0-3 1.3-3 3 0 1.3.8 2.4 2 2.8v1.7c0 2.5-2 4.5-4.5 4.5S9 18 9 15.5v-1l3.1-2.5c1.2-1 1.9-2.4 1.9-3.9V3c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1s.4 1 1 1h1v4.1c0 .9-.4 1.8-1.1 2.3L8 12.7l-2.9-2.3C4.4 9.9 4 9 4 8.1V4h1c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1v5.1c0 1.5.7 3 1.9 3.9L7 14.5v1c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5v-1.7c1.6-.5 2.4-2.2 1.8-3.8" />
  </svg>
)
const ForwardRef = forwardRef(SvgStethoscopeAlt)
export default ForwardRef
