import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderHorizontal = (
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
    <path d="M20 11H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1m-8 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-10c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m0-4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1M4 15c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1M4 9c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m0-4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m4 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m8 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1M8 19c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m4-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-12c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderHorizontal)
export default ForwardRef
