import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFilm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M21 2a1 1 0 0 0-1 1v2h-2V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v2H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1M6 17H4v-2h2Zm0-4H4v-2h2Zm0-4H4V7h2Zm10 9H8v-5h8Zm0-7H8V6h8Zm4 6h-2v-2h2Zm0-4h-2v-2h2Zm0-4h-2V7h2Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgFilm)
export default ForwardRef
