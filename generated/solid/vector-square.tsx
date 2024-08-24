import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVectorSquare = (
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
    <path d="M20 16.2V7.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3-1.3 0-2.4.8-2.8 2H7.8C7.4 2.8 6.3 2 5 2 3.3 2 2 3.3 2 5c0 1.3.8 2.4 2 2.8v8.4c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3 1.3 0 2.4-.8 2.8-2h8.4c.4 1.2 1.5 2 2.8 2 1.7 0 3-1.3 3-3 0-1.3-.8-2.4-2-2.8M16.2 18H7.8c-.3-.8-1-1.5-1.8-1.8V7.8c.8-.3 1.5-1 1.8-1.8h8.4c.3.8 1 1.5 1.8 1.8v8.4c-.8.3-1.5 1-1.8 1.8M19 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1M5 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m0 16c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m14 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgVectorSquare)
export default ForwardRef
