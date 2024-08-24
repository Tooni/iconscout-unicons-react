import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClapperBoard = (
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
    <path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-2.91 2-4 4H7.91l4-4ZM4 5a1 1 0 0 1 1-1h4.09l-4 4H4Zm16 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11h-5.09l4-4H19a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgClapperBoard)
export default ForwardRef
