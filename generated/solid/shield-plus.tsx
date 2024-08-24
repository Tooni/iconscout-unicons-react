import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShieldPlus = (
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
    <path d="M19.6 3.6c-.2-.2-.5-.3-.8-.2-2.2.5-4.4 0-6.2-1.3-.3-.2-.8-.2-1.1 0-1.9 1.3-4.1 1.8-6.3 1.3-.5-.1-1.1.3-1.2.8v7.7c0 2.9 1.4 5.6 3.8 7.3l3.7 2.6c.3.2.8.2 1.2 0l3.7-2.6c2.4-1.7 3.8-4.4 3.8-7.3V4.4c-.2-.3-.3-.6-.6-.8M14 13h-1v1c0 .6-.4 1-1 1s-1-.4-1-1v-1h-1c-.6 0-1-.4-1-1s.4-1 1-1h1v-1c0-.6.4-1 1-1s1 .4 1 1v1h1c.6 0 1 .4 1 1s-.4 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgShieldPlus)
export default ForwardRef
