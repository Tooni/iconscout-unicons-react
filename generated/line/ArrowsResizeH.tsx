import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowsResizeH = (
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
    <path d="M10 6a1 1 0 0 0-1 1v4H5.41l.8-.79a1 1 0 0 0-1.42-1.42l-2.5 2.5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2.5 2.5a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.8-.79H9v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1m11.92 5.62a1 1 0 0 0-.21-.33l-2.5-2.5a1 1 0 0 0-1.42 1.42l.8.79H15V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-4h3.59l-.8.79a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.5-2.5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowsResizeH)
export default ForwardRef
