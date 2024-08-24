import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowsVAlt = (
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
    <path d="m10.21 6.21.79-.8V10a1 1 0 0 0 2 0V5.41l.79.8a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-2.5-2.5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2.5 2.5a1 1 0 0 0 1.42 1.42m3.58 11.58-.79.8V14a1 1 0 0 0-2 0v4.59l-.79-.8a1 1 0 0 0-1.42 1.42l2.5 2.5a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2.5-2.5a1 1 0 0 0-1.42-1.42" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowsVAlt)
export default ForwardRef
