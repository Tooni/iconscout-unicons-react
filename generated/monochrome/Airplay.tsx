import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAirplay = (
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
    <rect
      width={20}
      height={15}
      x={2}
      y={3}
      className="airplay_svg__uim-tertiary"
      rx={3}
    />
    <path
      d="M16 21H8a1 1 0 0 1-.832-1.555l4-6a1.038 1.038 0 0 1 1.664 0l4 6A1 1 0 0 1 16 21"
      className="airplay_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAirplay)
export default ForwardRef
