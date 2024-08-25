import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgUserMd = (
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
    <path d="M15.9 13.2c-.1 0-.1-.1-.2-.1C17.2 12 18 10.3 18 8.4v-.7l.3-2.4c.2-1.6-.9-3-2.4-3.3l-.9-.2q-3-.45-6 0l-.8.2c-1.6.3-2.7 1.7-2.5 3.3L6 7.7v.7c0 1.8.8 3.6 2.3 4.7-.1 0-.1.1-.2.1-3.3 1.4-5.6 4.5-6 8.1-.1.5.3 1 .9 1.1s17.5 0 18 0h.1c.5-.1.9-.6.9-1.1-.5-3.6-2.8-6.7-6.1-8.1M12 16.3l-1.7-1.7q1.65-.3 3.3 0zm0-3.9c-2.2 0-3.9-1.7-4-3.9h8c-.1 2.2-1.8 3.9-4 3.9" />
  </svg>
)
const ForwardRef = forwardRef(SvgUserMd)
export default ForwardRef
