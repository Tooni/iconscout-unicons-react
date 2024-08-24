import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSyncSlash = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m18.3 7.1 1.4-1.4 2-2c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2 2c-3.6-3-8.9-3.1-12.6 0-.2.1-.4.3-.6.5V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2c2.5-2.6 6.5-3.3 9.8-1.4l.9.6L5.7 16.9C4.6 15.5 4 13.8 4 12c0-.6-.4-1-1-1s-1 .4-1 1c0 2.3.8 4.6 2.3 6.3l-2 2c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l2-2 1.4-1.4zm1.6 8.4h-4.5c-.6 0-1 .4-1 1s.4 1 1 1h2.4c-2.2 2.4-5.8 3.2-8.9 1.9l-1.5 1.5c1.4.7 3 1.1 4.6 1.1 2.6 0 5-1 6.9-2.8V21c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.6-.5-1-1-1m-.5-6.6c.4 1 .6 2 .6 3.1 0 .6.4 1 1 1s1-.4 1-1c0-1.6-.4-3.2-1.1-4.6z" />
  </svg>
)
const ForwardRef = forwardRef(SvgSyncSlash)
export default ForwardRef
