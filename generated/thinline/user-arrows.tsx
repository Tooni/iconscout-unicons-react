import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgUserArrows = (
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
    <path d="m6.6 6.9 2.5 2.5c.1.1.2.1.4.1.1 0 .3-.1.4-.1.2-.2.2-.5 0-.7L8.2 7h7.6l-1.6 1.6c-.1.1-.2.3-.2.4 0 .3.2.5.5.5.1 0 .3-.1.4-.1l2.5-2.5c.2-.2.2-.5 0-.7l-2.5-2.5c-.2-.2-.5-.2-.7 0s-.2.5 0 .7L15.8 6H8.2l1.6-1.6c.2-.2.2-.5 0-.7s-.5-.2-.7 0L6.6 6.1s-.1.1-.1.2v.4c0 .1.1.1.1.2m1.3 9c.8-.6 1.4-1.5 1.4-2.6C9.2 11.5 7.8 10 6 10s-3.2 1.5-3.2 3.2c0 1.1.5 2 1.4 2.6-1.9.8-3.2 2.6-3.2 4.7 0 .3.2.5.5.5s.5-.2.5-.5c0-2.2 1.8-4 4-4s4 1.8 4 4c0 .3.2.5.5.5s.5-.2.5-.5c0-2.1-1.3-3.9-3.1-4.6M6 15.5c-1.2 0-2.2-1-2.2-2.2S4.8 11 6 11s2.2 1 2.2 2.2c0 1.3-1 2.3-2.2 2.3m13.9.4c.8-.6 1.4-1.5 1.4-2.6 0-1.8-1.5-3.2-3.2-3.2s-3.2 1.5-3.2 3.2c0 1.1.5 2 1.4 2.6-1.8.7-3.1 2.5-3.1 4.6 0 .3.2.5.5.5s.5-.2.5-.5c0-2.2 1.8-4 4-4s4 1.8 4 4c0 .3.2.5.5.5s.5-.2.5-.5c-.2-2.1-1.5-3.9-3.3-4.6m-1.9-.4c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2" />
  </svg>
)
const ForwardRef = forwardRef(SvgUserArrows)
export default ForwardRef
