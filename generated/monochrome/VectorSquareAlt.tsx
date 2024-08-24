import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVectorSquareAlt = (
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
      d="M4 22a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2M4 6a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2m16 0a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2m0 16a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2m0-2.002"
      className="vector-square-alt_svg__uim-primary"
    />
    <rect
      width={10}
      height={10}
      x={7}
      y={7}
      className="vector-square-alt_svg__uim-tertiary"
      rx={1}
    />
    <path
      d="M18.278 5a1.94 1.94 0 0 1 0-2H5.722a1.94 1.94 0 0 1 0 2zM20 18a2 2 0 0 1 1 .278V5.722a1.94 1.94 0 0 1-2 0v12.556A2 2 0 0 1 20 18M4 18a2 2 0 0 1 1 .278V5.722a1.94 1.94 0 0 1-2 0v12.556A2 2 0 0 1 4 18m14.278 1H5.722a1.94 1.94 0 0 1 0 2h12.556a1.94 1.94 0 0 1 0-2"
      className="vector-square-alt_svg__uim-quaternary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVectorSquareAlt)
export default ForwardRef
