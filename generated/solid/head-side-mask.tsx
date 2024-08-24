import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHeadSideMask = (
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
    <path d="M13.2 2c-2-.1-4 .7-5.5 2.1-1.4 1.4-2.2 3.3-2.2 5.4l-1.8 3c-.1.2-.2.3-.2.5 0 .1 0 .2.1.3L5 17.2v.1c.5 1 1.5 1.7 2.7 1.7h.8v2c0 .6.4 1 1 1s1-.4 1-1v-2h2c.1 0 .2 0 .3-.1l3.7-1.3v.1l1 3.5c.1.4.5.7 1 .7h.3c.5-.2.8-.7.7-1.2l-.9-3.2 1.9-7.3v-.4c0-4.1-3.2-7.6-7.3-7.8M17 15.4l-3.5 1.2v-2.9l4.3-1.4zm1.4-5.4h-.3l-5.8 2h-6l1.1-1.7c.1-.2.2-.4.1-.6v-.2C7.5 6.5 10 4 13 4h.2c3 .2 5.4 2.7 5.3 5.8z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHeadSideMask)
export default ForwardRef
