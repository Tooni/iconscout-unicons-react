import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCompress = (
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
    <path
      d="M8 22a1 1 0 0 1-1-1v-4H3a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1M8 9H3a1 1 0 0 1 0-2h4V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m13 0h-5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2m-5 13a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-1 1"
      className="compress_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCompress)
export default ForwardRef
