import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderTop = (
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
    <path d="M4 4.5h16c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1m8 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m8-12c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-8 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m8-8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-8 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderTop)
export default ForwardRef
