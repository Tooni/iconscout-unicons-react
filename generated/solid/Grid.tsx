import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGrid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M21 2H3c-.6 0-1 .4-1 1v4h20V3c0-.6-.4-1-1-1M2 15h9V9H2zm0 6c0 .6.4 1 1 1h8v-5H2zm11-6h9V9h-9zm0 7h8c.6 0 1-.4 1-1v-4h-9z" />
  </svg>
)
const ForwardRef = forwardRef(SvgGrid)
export default ForwardRef
