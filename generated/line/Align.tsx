import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlign = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M3 15h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m0-4h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m0-4h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 10H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-1.36-7.43a1 1 0 1 0-1.28 1.53l1.08.9-1.08.9a1 1 0 0 0-.13 1.41 1 1 0 0 0 .77.36 1 1 0 0 0 .64-.24l2-1.66a1 1 0 0 0 0-1.54Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlign)
export default ForwardRef
