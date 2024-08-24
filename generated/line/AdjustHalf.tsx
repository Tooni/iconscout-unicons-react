import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAdjustHalf = (
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
    <path d="M20.83 7.32a10.1 10.1 0 0 0-3.44-3.73A10 10 0 1 0 12 22h.29a10 10 0 0 0 8.54-14.68M11 19.93a8 8 0 0 1 0-15.86Zm2-15.86a8 8 0 0 1 2.49.74L13 9.12Zm0 9 4.17-7.17a8.1 8.1 0 0 1 1.58 1.83L13 17.69Zm1.15 6.58L19.74 10a8.2 8.2 0 0 1 .26 2 8 8 0 0 1-5.85 7.7Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgAdjustHalf)
export default ForwardRef
