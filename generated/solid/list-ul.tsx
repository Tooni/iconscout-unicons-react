import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgListUl = (
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
    <path d="M7 8h14c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1m14 3H7c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1m0 5H7c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1M3.7 6.3c-.1-.1-.2-.2-.3-.2-.4-.2-.8-.1-1.1.2-.1.1-.2.2-.2.3-.1.3-.1.5 0 .8.1.1.1.2.2.3s.2.2.3.2c.1.1.3.1.4.1.3 0 .5-.1.7-.3.1-.1.2-.2.2-.3.1-.3.1-.5 0-.8 0-.1-.1-.2-.2-.3m0 5c-.3-.3-.7-.4-1.1-.2-.1.1-.2.1-.3.2s-.2.2-.2.3c-.1.2-.1.5 0 .8.1.1.1.2.2.3s.2.2.3.2c.1.1.3.1.4.1s.3 0 .4-.1.2-.1.3-.2.2-.2.2-.3c.1-.2.1-.5 0-.8 0-.1-.1-.2-.2-.3m0 5c-.1-.1-.2-.2-.3-.2-.2-.1-.5-.1-.8 0-.1 0-.2.1-.3.2s-.2.2-.2.3c-.2.4-.1.8.2 1.1.1.1.2.2.3.2.1.1.3.1.4.1s.3 0 .4-.1.2-.1.3-.2c.3-.3.4-.7.2-1.1 0-.1-.1-.2-.2-.3" />
  </svg>
)
const ForwardRef = forwardRef(SvgListUl)
export default ForwardRef
