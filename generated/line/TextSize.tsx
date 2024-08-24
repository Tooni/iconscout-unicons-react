import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTextSize = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M9 11H3a1 1 0 0 0 0 2h2v5a1 1 0 0 0 2 0v-5h2a1 1 0 0 0 0-2m12-6H9a1 1 0 0 0 0 2h5v11a1 1 0 0 0 2 0V7h5a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgTextSize)
export default ForwardRef
