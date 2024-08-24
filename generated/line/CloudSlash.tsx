import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCloudSlash = (
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
    <path d="m16.71 16.29-13-13a1 1 0 0 0-1.42 1.42l3.36 3.35a7 7 0 0 0-.59 2A4 4 0 0 0 6 18h9.59l2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM6 16a2 2 0 0 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 .2-1.39L13.59 16Zm12.42-7.78A7 7 0 0 0 12 4a6.7 6.7 0 0 0-2.32.4 1 1 0 0 0 .66 1.88A4.9 4.9 0 0 1 12 6a5 5 0 0 1 4.73 3.39 1 1 0 0 0 .78.67 3 3 0 0 1 1.85 4.79 1 1 0 0 0 .16 1.4 1 1 0 0 0 .62.22 1 1 0 0 0 .78-.38 5 5 0 0 0-2.5-7.87" />
  </svg>
)
const ForwardRef = forwardRef(SvgCloudSlash)
export default ForwardRef