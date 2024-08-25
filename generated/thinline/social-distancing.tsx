import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSocialDistancing = (
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
    <path d="M9 17.5H4.2l1.6-1.6c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-2.5 2.5s-.1.1-.1.2v.4c0 .1.1.1.1.2L5.1 21c.1-.1.3 0 .4 0s.3-.1.4-.1c.2-.2.2-.5 0-.7l-1.6-1.6H9c.3 0 .5-.2.5-.5s-.2-.6-.5-.6m12.4.1-2.5-2.5c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l1.6 1.6H15c-.3 0-.5.2-.5.5s.2.5.5.5h4.8L18.2 20c-.1.1-.1.2-.1.4 0 .3.2.5.5.5.1 0 .3-.1.4-.1l2.5-2.5s.1-.1.1-.2v-.4c-.2 0-.2 0-.2-.1M7.9 9.9c.8-.6 1.4-1.5 1.4-2.6C9.2 5.5 7.8 4 6 4S2.8 5.5 2.8 7.2c0 1.1.5 2 1.4 2.6-1.9.8-3.2 2.6-3.2 4.7 0 .3.2.5.5.5s.5-.2.5-.5c0-2.2 1.8-4 4-4s4 1.8 4 4c0 .3.2.5.5.5s.5-.2.5-.5c0-2.1-1.3-3.9-3.1-4.6M6 9.5c-1.2 0-2.2-1-2.2-2.2S4.8 5 6 5s2.2 1 2.2 2.2c0 1.3-1 2.3-2.2 2.3m13.9.4c.8-.6 1.4-1.5 1.4-2.6C21.2 5.5 19.8 4 18 4s-3.2 1.5-3.2 3.2c0 1.1.5 2 1.4 2.6-1.8.7-3.1 2.5-3.1 4.6 0 .3.2.5.5.5s.5-.2.5-.5c0-2.2 1.8-4 4-4s4 1.8 4 4c0 .3.2.5.5.5s.5-.2.5-.5c-.1-2-1.4-3.8-3.2-4.5M18 9.5c-1.2 0-2.2-1-2.2-2.2S16.8 5 18 5s2.2 1 2.2 2.2c0 1.3-1 2.3-2.2 2.3" />
  </svg>
)
const ForwardRef = forwardRef(SvgSocialDistancing)
export default ForwardRef
