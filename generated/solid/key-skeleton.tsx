import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgKeySkeleton = (
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
    <path d="m21 4.4.7-.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9.8 12.8C9 12.3 8 12 7 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5c0-1-.3-2-.8-2.8l5.6-5.6 2.1 2.1c.4.4 1 .4 1.4 0s.4-1 0-1.4l-2.1-2.1 1.4-1.4.7.7c.4.4 1 .4 1.4 0s.4-1 0-1.4zM7 20c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3" />
  </svg>
)
const ForwardRef = forwardRef(SvgKeySkeleton)
export default ForwardRef
