import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgToggleOn = (
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
    <circle cx={16.5} cy={12} r={2.5} className="toggle-on_svg__uim-tertiary" />
    <path
      d="M16.5 6.5h-9a5.5 5.5 0 0 0 0 11h9a5.5 5.5 0 0 0 0-11m0 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
      className="toggle-on_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgToggleOn)
export default ForwardRef
