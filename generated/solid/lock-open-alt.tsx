import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLockOpenAlt = (
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
    <path d="M17 9H9V7q0-1.2.9-2.1c1.2-1.2 3.1-1.2 4.2 0 .4.4.6.9.8 1.4.1.5.7.8 1.2.7s.9-.7.7-1.2c-.2-.9-.7-1.7-1.3-2.3-.9-1-2.2-1.5-3.5-1.5-2.8 0-5 2.2-5 5v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3m-3.9 6.5-.1.1V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.4c-.6-.6-.7-1.5-.1-2.1s1.5-.7 2.1-.1c.6.5.7 1.5.1 2.1" />
  </svg>
)
const ForwardRef = forwardRef(SvgLockOpenAlt)
export default ForwardRef
