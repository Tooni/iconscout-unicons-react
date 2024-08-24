import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayerGroupSlash = (
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
    <path d="M10.26 5 12 4l7 4-3.15 1.83a1 1 0 0 0-.37 1.36 1 1 0 0 0 1.37.37l4.65-2.69a1 1 0 0 0 0-1.74l-9-5.2a1 1 0 0 0-1 0l-2.24 1.3a1 1 0 0 0-.37 1.37 1 1 0 0 0 1.37.4M3.71 2.29a1 1 0 0 0-1.42 1.42L4.54 6l-2 1.17a1 1 0 0 0 0 1.74l9 5.2a1 1 0 0 0 1 0l.1-.06 1.07 1.07-1.67 1-8.54-4.99a1 1 0 1 0-1 1.74l9 5.2a1 1 0 0 0 .5.13 1 1 0 0 0 .5-.13l2.63-1.52 1.07 1.07L12 20l-8.5-4.87a1 1 0 0 0-1 1.74l9 5.2a1 1 0 0 0 1 0l5.17-3 2.62 2.63a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM5 8l1-.58 2.75 2.75Zm15.5 3.13-2.12 1.22a1 1 0 0 0 1 1.74l2.12-1.22a1 1 0 1 0-1-1.74" />
  </svg>
)
const ForwardRef = forwardRef(SvgLayerGroupSlash)
export default ForwardRef
