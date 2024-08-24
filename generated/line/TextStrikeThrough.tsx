import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTextStrikeThrough = (
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
    <path d="M15 13H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2m2-7H7a1 1 0 0 0 0 2h4v2a1 1 0 0 0 2 0V8h4a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgTextStrikeThrough)
export default ForwardRef
