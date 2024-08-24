import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDropbox = (
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
    <path d="m21.61 11.81-3.25-2.53 3.26-2.56a1 1 0 0 0 .38-.86 1.06 1.06 0 0 0-.5-.8l-5.14-2.93a1 1 0 0 0-1.15.12L12 5.05l-3.21-2.8a1 1 0 0 0-1.15-.12L2.5 5.06a1.06 1.06 0 0 0-.5.8 1 1 0 0 0 .38.86l3.26 2.56-3.25 2.49a1 1 0 0 0-.39.86 1 1 0 0 0 .5.8l3.41 2v2.47a1 1 0 0 0 .48.85l5.09 3.13a1 1 0 0 0 1 0l5.09-3.13a1 1 0 0 0 .48-.85v-2.48l3.41-1.95a1 1 0 0 0 .5-.8 1 1 0 0 0-.35-.86M16 4.22l3.23 1.84-2.55 2-3-1.84Zm-1.09 5.12-2.91 2-2.91-2L12 7.55ZM4.79 6.06 8 4.22l2.31 2-3 1.84Zm0 6.39 2.5-1.92 3 2.08-2.22 1.73Zm11.29 4.86L12 19.83l-4.09-2.52v-.8a1 1 0 0 0 .85-.18l3.24-2.5 3.24 2.5a1 1 0 0 0 .61.21 1 1 0 0 0 .24 0Zm-.15-3-2.23-1.7 3-2.08 2.51 1.94Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDropbox)
export default ForwardRef
