import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMicrosoft = (
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
    <path d="M2 22h9.5v-9.5H2zm0-10.5h9.5V2H2zM12.5 2v9.5H22V2zm0 20H22v-9.5h-9.5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMicrosoft)
export default ForwardRef
