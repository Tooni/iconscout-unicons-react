import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStethoscopeAlt = (
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
    <path d="M19.5 8C18.1 8 17 9.1 17 10.5c0 1.2.9 2.2 2 2.4v2.6c0 3-2.5 5.5-5.5 5.5S8 18.5 8 15.5v-1.8l3.3-2.6C12.4 10.2 13 9 13 7.6V2.5c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5s.2.5.5.5H12v4.6c0 1.1-.5 2.1-1.3 2.7l-3.2 2.5-3.2-2.5C3.5 9.6 3 8.6 3 7.6V3h1.5c.3 0 .5-.2.5-.5S4.8 2 4.5 2h-2c-.3 0-.5.2-.5.5v5.1c0 1.4.6 2.7 1.7 3.5L7 13.7v1.8c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5v-2.6c1.1-.2 2-1.2 2-2.4C22 9.1 20.9 8 19.5 8m0 4c-.8 0-1.5-.7-1.5-1.5S18.7 9 19.5 9s1.5.7 1.5 1.5-.7 1.5-1.5 1.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgStethoscopeAlt)
export default ForwardRef
