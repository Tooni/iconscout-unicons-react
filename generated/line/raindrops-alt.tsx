import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRaindropsAlt = (
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
    <path d="M9 7.75C9 5 6.42 3.24 6.31 3.17a1 1 0 0 0-1.12 0C5.08 3.25 2.5 5 2.5 7.75a3.25 3.25 0 0 0 6.5 0M5.75 9A1.25 1.25 0 0 1 4.5 7.75 3.66 3.66 0 0 1 5.75 5.3 3.6 3.6 0 0 1 7 7.75 1.25 1.25 0 0 1 5.75 9m6.06 1.17a1 1 0 0 0-1.12 0c-.17.12-4.19 2.9-4.19 7.08a4.75 4.75 0 0 0 9.5 0c0-4.25-4-6.97-4.19-7.08M11.25 20a2.75 2.75 0 0 1-2.75-2.75c0-2.31 1.81-4.17 2.76-5 .94.79 2.74 2.63 2.74 5A2.75 2.75 0 0 1 11.25 20m6.81-17.83a1 1 0 0 0-1.12 0c-.14.1-3.44 2.38-3.44 5.83a4 4 0 0 0 8 0c0-3.49-3.3-5.74-3.44-5.83M17.5 10a2 2 0 0 1-2-2 5.44 5.44 0 0 1 2-3.72 5.4 5.4 0 0 1 2 3.72 2 2 0 0 1-2 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgRaindropsAlt)
export default ForwardRef
