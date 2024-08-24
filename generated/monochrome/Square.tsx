import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <rect
      width={20}
      height={20}
      x={2}
      y={2}
      className="square_svg__uim-primary"
      rx={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSquare)
export default ForwardRef
