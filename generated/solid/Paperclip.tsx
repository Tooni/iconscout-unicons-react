import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPaperclip = (
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
    <path d="m18.1 12.4-6.2 6.2c-1.7 1.7-4.4 1.7-6 0-1.7-1.7-1.7-4.4 0-6l8-8c1-.9 2.5-.9 3.5 0 1 1 1 2.6 0 3.5L10.5 15c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l5.1-5.1c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 12.6c-1.1 1.1-1.1 2.8 0 3.9 1.1 1 2.8 1 3.9 0l6.9-6.9c1.8-1.8 1.8-4.6 0-6.4s-4.6-1.8-6.4 0l-8 8c-1.2 1.2-1.8 2.8-1.8 4.4 0 3.5 2.8 6.2 6.3 6.2 1.7 0 3.2-.7 4.4-1.8l6.2-6.2c.4-.4.4-1 0-1.4s-1-.4-1.4 0" />
  </svg>
)
const ForwardRef = forwardRef(SvgPaperclip)
export default ForwardRef
