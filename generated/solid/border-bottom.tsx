import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderBottom = (
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
    <path d="M12 9.5c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m0 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m0 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m0-12c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m8 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m-12 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m8 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m0 8c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m-12-4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m16 6c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 12H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1m-16-6c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m0-8c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m4 8c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m-4 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderBottom)
export default ForwardRef
