import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLeftIndent = (
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
    <path d="M2.5 10.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1m0-4h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1m19.345 2.852a.666.666 0 0 0-.939-.086l-2.666 2.222a.665.665 0 0 0 0 1.023l2.666 2.223a.66.66 0 0 0 .938-.084.667.667 0 0 0-.084-.94L19.708 12l2.052-1.71a.666.666 0 0 0 .085-.938M2.5 14.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1m19 3h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgLeftIndent)
export default ForwardRef
