import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLinkH = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M10 15H7c-1.7 0-3-1.3-3-3s1.3-3 3-3h3c.6 0 1-.4 1-1s-.4-1-1-1H7c-2.8 0-5 2.2-5 5s2.2 5 5 5h3c.6 0 1-.4 1-1s-.4-1-1-1m7-8h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c2.8 0 5-2.2 5-5s-2.2-5-5-5m-9 5c0 .6.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgLinkH)
export default ForwardRef
