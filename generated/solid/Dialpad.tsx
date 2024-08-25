import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDialpad = (
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
    <path d="M14 9.2h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8m0 7h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8m-7-14H3c-.4 0-.8.4-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8V3c0-.4-.4-.8-.8-.8m0 7H3c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8m14-7h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8V3c0-.4-.4-.8-.8-.8m-7 0h-4c-.4 0-.8.4-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8V3c0-.4-.4-.8-.8-.8m7 7h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8" />
  </svg>
)
const ForwardRef = forwardRef(SvgDialpad)
export default ForwardRef
