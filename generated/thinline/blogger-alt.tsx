import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBloggerAlt = (
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
    <path d="M14 13.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m-4-3h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1m6 0a.5.5 0 0 1-.5-.5V9A3.504 3.504 0 0 0 12 5.5h-2A4.505 4.505 0 0 0 5.5 10v4a4.505 4.505 0 0 0 4.5 4.5h4a4.505 4.505 0 0 0 4.5-4.5v-1a2.5 2.5 0 0 0-2.5-2.5m1.5 3.5a3.504 3.504 0 0 1-3.5 3.5h-4A3.504 3.504 0 0 1 6.5 14v-4A3.504 3.504 0 0 1 10 6.5h2A2.5 2.5 0 0 1 14.5 9v1c0 .828.672 1.5 1.5 1.5s1.5.672 1.5 1.5zM20 1H4a3.003 3.003 0 0 0-3 3v16a3.003 3.003 0 0 0 3 3h16a3.003 3.003 0 0 0 3-3V4a3.003 3.003 0 0 0-3-3m2 19a2.003 2.003 0 0 1-2 2H4a2.003 2.003 0 0 1-2-2V4a2.003 2.003 0 0 1 2-2h16a2.003 2.003 0 0 1 2 2z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBloggerAlt)
export default ForwardRef
