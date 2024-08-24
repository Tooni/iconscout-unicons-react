import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDialpad = (
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
    <path d="M14 9.2h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8m0 7h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8m-7-14H3c-.4 0-.8.4-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8V3c0-.4-.4-.8-.8-.8m0 7H3c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8m14-7h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8V3c0-.4-.4-.8-.8-.8m-7 0h-4c-.4 0-.8.4-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8V3c0-.4-.4-.8-.8-.8m7 7h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8" />
  </svg>
)
const ForwardRef = forwardRef(SvgDialpad)
export default ForwardRef
