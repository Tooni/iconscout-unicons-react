import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCornerUpRight = (
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
    <path d="m19.852 7.647-5.5-5.5a.5.5 0 0 0-.707.707L18.29 7.5H8.889A4.394 4.394 0 0 0 4.5 11.889V21.5a.5.5 0 1 0 1 0v-9.611A3.393 3.393 0 0 1 8.889 8.5h9.402l-4.646 4.646a.5.5 0 1 0 .707.708l5.5-5.5a.5.5 0 0 0 0-.707" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerUpRight)
export default ForwardRef
