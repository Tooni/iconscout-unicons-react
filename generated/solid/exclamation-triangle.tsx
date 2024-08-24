import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExclamationTriangle = (
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
    <path d="m22.7 17.5-8.1-14c-.8-1.4-2.7-1.9-4.1-1.1-.5.3-.9.7-1.1 1.1l-8.1 14c-.8 1.4-.3 3.3 1.1 4.1.5.3 1 .4 1.5.4H20c1.7 0 3-1.4 3-3 .1-.6-.1-1.1-.3-1.5M12 18c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m1-5c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1z" />
  </svg>
)
const ForwardRef = forwardRef(SvgExclamationTriangle)
export default ForwardRef
