import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderAlt = (
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
      d="M3.5 20.5a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-15v15a1 1 0 0 1-1 1"
      className="border-alt_svg__uim-primary"
    />
    <circle
      cx={19.5}
      cy={11.5}
      r={1}
      className="border-alt_svg__uim-tertiary"
    />
    <circle cx={19.5} cy={7.5} r={1} className="border-alt_svg__uim-tertiary" />
    <circle
      cx={19.5}
      cy={15.5}
      r={1}
      className="border-alt_svg__uim-tertiary"
    />
    <circle cx={7.5} cy={19.5} r={1} className="border-alt_svg__uim-tertiary" />
    <circle
      cx={11.5}
      cy={19.5}
      r={1}
      className="border-alt_svg__uim-tertiary"
    />
    <circle
      cx={15.5}
      cy={19.5}
      r={1}
      className="border-alt_svg__uim-tertiary"
    />
    <circle
      cx={19.5}
      cy={19.5}
      r={1}
      className="border-alt_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderAlt)
export default ForwardRef
