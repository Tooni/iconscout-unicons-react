import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSlackAlt = (
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
    <path d="M21.2 12c.8-.5 1.3-1.5 1.3-2.5 0-1.7-1.3-3-3-3-.8 0-1.5.3-2 .8V4.5c0-1.7-1.3-3-3-3-1 0-2 .5-2.5 1.3-.5-.8-1.5-1.3-2.5-1.3-1.7 0-3 1.3-3 3 0 .8.3 1.5.8 2H4.5c-1.7 0-3 1.3-3 3 0 1 .5 2 1.3 2.5-.8.5-1.3 1.5-1.3 2.5 0 1.7 1.3 3 3 3 .8 0 1.5-.3 2-.8v2.8c0 1.7 1.3 3 3 3 1 0 2-.5 2.5-1.3.5.8 1.5 1.3 2.5 1.3 1.7 0 3-1.3 3-3 0-.8-.3-1.5-.8-2h2.8c1.7 0 3-1.3 3-3 0-1-.5-2-1.3-2.5m-3.7-2.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2zm-5-5c0-1.1.9-2 2-2s2 .9 2 2v5c0 1.1-.9 2-2 2s-2-.9-2-2zm-3-2c1.1 0 2 .9 2 2v2h-2c-1.1 0-2-.9-2-2s.9-2 2-2m-3 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2zm-2-3c-1.1 0-2-.9-2-2s.9-2 2-2h5c1.1 0 2 .9 2 2s-.9 2-2 2zm7 8c0 1.1-.9 2-2 2s-2-.9-2-2v-5c0-1.1.9-2 2-2s2 .9 2 2zm.5-6.7c-.2-.3-.5-.6-.8-.8.3-.2.6-.5.8-.8.2.3.5.6.8.8-.3.2-.6.5-.8.8m2.5 8.7c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2s-.9 2-2 2m5-5h-5c-1.1 0-2-.9-2-2s.9-2 2-2h5c1.1 0 2 .9 2 2s-.9 2-2 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgSlackAlt)
export default ForwardRef
