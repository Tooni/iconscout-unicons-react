import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSanitizer = (
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
    <path d="M18.8 7.6 16 5.5V3h1c.6 0 1-.4 1-1s-.4-1-1-1H8.7Q6.6 1 5.1 2.5l-.8.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l.8-.8c.6-.6 1.4-.9 2.2-.9H10v2.5L7.2 7.6C6.4 8.2 6 9.1 6 10v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V10c0-.9-.4-1.8-1.2-2.4M12 3h2v2h-2zm1 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgSanitizer)
export default ForwardRef
