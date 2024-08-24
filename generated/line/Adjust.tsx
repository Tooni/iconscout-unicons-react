import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAdjust = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m-1 17.93a8 8 0 0 1 0-15.86Zm2 0V4.07a8 8 0 0 1 0 15.86" />
  </svg>
)
const ForwardRef = forwardRef(SvgAdjust)
export default ForwardRef
