import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowCircleDown = (
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
    <path d="M11.29 15.71a1 1 0 0 0 .33.21 1 1 0 0 0 .76 0 1 1 0 0 0 .33-.21l3-3a1 1 0 0 0-1.42-1.42L13 12.59V9a1 1 0 0 0-2 0v3.59l-1.29-1.3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42ZM12 22A10 10 0 1 0 2 12a10 10 0 0 0 10 10m0-18a8 8 0 1 1-8 8 8 8 0 0 1 8-8" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowCircleDown)
export default ForwardRef
