import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgToggleOff = (
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
      d="M16.5 17.5h-9a5.5 5.5 0 1 1 0-11h9a5.5 5.5 0 1 1 0 11"
      className="toggle-off_svg__uim-tertiary"
    />
    <circle cx={7.5} cy={12} r={2.5} className="toggle-off_svg__uim-primary" />
  </svg>
)
const ForwardRef = forwardRef(SvgToggleOff)
export default ForwardRef
