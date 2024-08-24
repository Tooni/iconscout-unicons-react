import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSignout = (
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
    <path d="M4 12a.5.5 0 0 0 .5.5h8.793l-2.647 2.646a.5.5 0 1 0 .707.708l3.5-3.5a.5.5 0 0 0 0-.707l-3.5-3.5a.5.5 0 0 0-.707.707l2.647 2.646H4.5a.5.5 0 0 0-.5.5M17.5 2h-11A2.5 2.5 0 0 0 4 4.5v4a.5.5 0 0 0 1 0v-4C5 3.672 5.672 3 6.5 3h11c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-11c-.828 0-1.5-.672-1.5-1.5v-4a.5.5 0 0 0-1 0v4A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgSignout)
export default ForwardRef
