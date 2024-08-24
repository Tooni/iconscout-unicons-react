import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRocket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M21.6 2.7c0-.2-.2-.3-.4-.4-3.8-1-7.9.3-10.4 3.3L9.5 7.1l-2.7-.7c-1.1-.4-2.2.1-2.7 1.1L2 11.2s0 .1-.1.1c-.1.3.1.5.4.6l3.4.7c-.3.9-.6 1.8-.7 2.7 0 .2 0 .3.1.4l3 2.9c.1.1.2.1.4.1.9-.1 1.9-.3 2.8-.6l.7 3.3c0 .2.3.4.5.4.1 0 .2 0 .2-.1l3.7-2.1c.9-.5 1.3-1.6 1.1-2.6l-.7-2.9 1.4-1.3c3.1-2.3 4.4-6.3 3.4-10.1M3.2 11.1 4.9 8c.3-.6.9-.8 1.5-.6l2.3.6-1 1.2c-.6.8-1.2 1.6-1.6 2.5zM16 19l-3.1 1.8-.6-2.9c.9-.4 1.7-1 2.5-1.6l1.3-1.2.6 2.3c0 .6-.2 1.3-.7 1.6m1.6-6.7-3.5 3.2c-1.5 1.3-3.4 2.1-5.4 2.3l-2.6-2.6c.3-2 1.1-3.9 2.4-5.4L10.1 8l.1-.1 1.4-1.6c2.2-2.6 5.8-3.8 9.1-3.1.7 3.4-.4 6.9-3.1 9.1m-1.2-6.7c-1.1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9c1.1 0 1.9-.9 1.9-1.9s-.8-1.9-1.9-1.9m0 2.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9" />
  </svg>
)
const ForwardRef = forwardRef(SvgRocket)
export default ForwardRef
