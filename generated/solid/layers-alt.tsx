import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayersAlt = (
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
    <path d="M16 7H6c-.6 0-1 .4-1 1v2.5h7.5c.6 0 1 .4 1 1V19H16c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1m-5 5H3c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1M21 2H9c-.6 0-1 .4-1 1v2.5h9.5c.6 0 1 .4 1 1V16H21c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgLayersAlt)
export default ForwardRef
