import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCaretRight = (
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
    <path d="m19.5 11.13-14-8.08a1 1 0 0 0-1 0 1 1 0 0 0-.5.87v16.16a1 1 0 0 0 .5.87 1 1 0 0 0 1 0l14-8.08a1 1 0 0 0 0-1.74M6 18.35V5.65L17 12Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCaretRight)
export default ForwardRef
