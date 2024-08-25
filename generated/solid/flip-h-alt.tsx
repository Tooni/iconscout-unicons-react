import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFlipHAlt = (
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
    <path d="M7.4 7.2h.2l1.9-.5c.5-.1.9-.7.7-1.2-.1-.5-.7-.9-1.2-.7l-1.9.4c-.4.1-.8.5-.8 1 .1.5.5 1 1.1 1M9.5 9h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1m3.7-3.3h.2l1.9-.5c.6-.2 1-.7.8-1.2-.1-.5-.7-.9-1.2-.7l-1.9.4c-.4.1-.8.5-.8 1s.5 1 1 1m.3 3.3c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zM21 2.8c-.1-.5-.7-.9-1.2-.7l-1 .2c-.4.1-.8.5-.8 1 0 .6.4 1 1 1 .1.4.5.7 1 .7.6 0 1-.4 1-1V2.8M4 10.5c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1M20 7c-.6 0-1 .4-1 1v1.1c-.3.2-.5.5-.5.9 0 .6.4 1 1 1h.5c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1m0 6H4c-.6 0-1 .4-1 1v3c0 .5.3.9.8 1l16 4h.2c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgFlipHAlt)
export default ForwardRef
