import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderRight = (
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
    <path d="M20.5 3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1s1-.4 1-1V4c0-.6-.4-1-1-1m-4 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m12 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m8 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m4-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderRight)
export default ForwardRef
