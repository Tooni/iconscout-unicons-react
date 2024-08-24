import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMultiply = (
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
    <path d="m13.41 12 6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1 1 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l6.29-6.3 6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMultiply)
export default ForwardRef
