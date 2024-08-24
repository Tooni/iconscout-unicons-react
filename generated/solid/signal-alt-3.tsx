import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSignalAlt3 = (
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
    <path d="M6 15H2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1m8-6h-4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V10c0-.6-.4-1-1-1m8-8h-4c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgSignalAlt3)
export default ForwardRef
