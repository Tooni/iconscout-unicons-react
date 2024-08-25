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
    <path d="M14.5 16h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5m1.8-8H16V4.5c0-.3-.2-.5-.5-.5h-2V2h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H9.7c-1.6 0-3 .9-3.7 2.3-.1.2 0 .5.3.6 0 .1.1.1.2.1.2 0 .4-.1.4-.3.6-1 1.7-1.7 2.8-1.7h2.8v2h-2c-.3 0-.5.2-.5.5V8h-.3C8.2 8 7 9.2 7 10.7v9.6C7 21.8 8.2 23 9.7 23h6.6c1.5 0 2.7-1.2 2.7-2.7v-9.6C19 9.2 17.8 8 16.3 8M11 5h4v3h-4zm7 15.3c0 .9-.8 1.7-1.7 1.7H9.7c-.9 0-1.7-.8-1.7-1.7v-9.6C8 9.8 8.8 9 9.7 9h6.6c.9 0 1.7.8 1.7 1.7z" />
  </svg>
)
const ForwardRef = forwardRef(SvgSanitizerAlt)
export default ForwardRef
