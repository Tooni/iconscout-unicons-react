import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWindowGrid = (
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
    <path d="M2 3v18c0 .6.4 1 1 1h5V2H3c-.6 0-1 .4-1 1m19-1H10v9h12V3c0-.6-.4-1-1-1M10 22h11c.6 0 1-.4 1-1v-8H10z" />
  </svg>
)
const ForwardRef = forwardRef(SvgWindowGrid)
export default ForwardRef