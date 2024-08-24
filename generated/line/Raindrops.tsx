import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRaindrops = (
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
    <path d="M10.5 8c0-3.49-3.3-5.74-3.44-5.83a1 1 0 0 0-1.12 0C5.8 2.27 2.5 4.55 2.5 8a4 4 0 0 0 8 0m-4 2a2 2 0 0 1-2-2 5.44 5.44 0 0 1 2-3.72A5.4 5.4 0 0 1 8.5 8a2 2 0 0 1-2 2m11.56-7.83a1 1 0 0 0-1.12 0c-.14.1-3.44 2.38-3.44 5.83a4 4 0 0 0 8 0c0-3.49-3.3-5.74-3.44-5.83M17.5 10a2 2 0 0 1-2-2 5.44 5.44 0 0 1 2-3.72 5.4 5.4 0 0 1 2 3.72 2 2 0 0 1-2 2m-4.44 2.17a1 1 0 0 0-1.12 0c-.14.1-3.44 2.38-3.44 5.83a4 4 0 0 0 8 0c0-3.49-3.3-5.74-3.44-5.83M12.5 20a2 2 0 0 1-2-2 5.44 5.44 0 0 1 2-3.72 5.4 5.4 0 0 1 2 3.72 2 2 0 0 1-2 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgRaindrops)
export default ForwardRef
