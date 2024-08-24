import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgParagraph = (
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
    <path d="M13.5 14h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m8-5h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgParagraph)
export default ForwardRef
