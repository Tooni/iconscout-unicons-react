import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSyncExclamation = (
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
    <path d="M12 13c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .6.4 1 1 1m-1 2c0 .5.5 1 1 1s1-.5 1-1c0-.3-.1-.5-.3-.7-.3-.3-.7-.4-1.1-.2-.1 0-.2.1-.3.2-.2.2-.3.4-.3.7m6-11.7C13.1 1.1 8.3 1.8 5.1 4.7V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .1 0 .2.1.3v.1c.1.2.3.4.5.5s.3.1.4.1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2C7.7 4.9 9.8 4 12 4c4.4 0 8 3.6 8 8 0 .6.4 1 1 1s1-.4 1-1c0-3.6-1.9-6.9-5-8.7m2.9 12.2h-4.5c-.6 0-1 .4-1 1s.4 1 1 1h2.4C16.3 19.1 14.2 20 12 20c-4.4 0-8-3.6-8-8 0-.6-.4-1-1-1s-1 .4-1 1c0 5.5 4.5 10 10 10 2.6 0 5-1 6.9-2.8V21c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.6-.5-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgSyncExclamation)
export default ForwardRef
