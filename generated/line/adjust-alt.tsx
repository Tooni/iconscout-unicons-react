import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAdjustAlt = (
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
    <path d="M20.83 7.32a.2.2 0 0 0 0-.08 10 10 0 0 0-3.38-3.65A9.9 9.9 0 0 0 12 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h.28a10 10 0 0 0 8.55-14.68M13 4.06a8 8 0 0 1 2.49.74L13 9.12Zm0 9.06 4.17-7.22a7.9 7.9 0 0 1 1.58 1.83L13 17.69Zm1.16 6.57L19.75 10a8.4 8.4 0 0 1 .25 2 7.94 7.94 0 0 1-5.84 7.69" />
  </svg>
)
const ForwardRef = forwardRef(SvgAdjustAlt)
export default ForwardRef
