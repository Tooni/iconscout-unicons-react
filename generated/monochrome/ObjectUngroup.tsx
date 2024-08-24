import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgObjectUngroup = (
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
      d="M4 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4m10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0-2.002"
      className="object-ungroup_svg__uim-tertiary"
    />
    <path
      d="M10 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4m10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0-2.002"
      className="object-ungroup_svg__uim-primary"
    />
    <path
      d="M12.278 5a1.94 1.94 0 0 1 0-2H5.722a1.94 1.94 0 0 1 0 2zM4 12a2 2 0 0 1 1 .278V5.722a1.94 1.94 0 0 1-2 0v6.556A2 2 0 0 1 4 12"
      className="object-ungroup_svg__uim-quaternary"
    />
    <path
      d="M20 18a2 2 0 0 1 1 .278v-6.556a1.94 1.94 0 0 1-2 0v6.556A2 2 0 0 1 20 18m-10 0a2 2 0 0 1 1 .278v-6.556a1.94 1.94 0 0 1-2 0v6.556A2 2 0 0 1 10 18"
      className="object-ungroup_svg__uim-tertiary"
    />
    <path
      d="M12.278 13H11v2h1.278a1.94 1.94 0 0 1 0-2M9 15v-2H5.722a1.94 1.94 0 0 1 0 2z"
      className="object-ungroup_svg__uim-quaternary"
    />
    <path
      d="M18.278 19h-6.556a1.94 1.94 0 0 1 0 2h6.556a1.94 1.94 0 0 1 0-2m0-8a1.94 1.94 0 0 1 0-2h-6.556a1.94 1.94 0 0 1 0 2z"
      className="object-ungroup_svg__uim-tertiary"
    />
    <path
      d="M15 9V5.722a1.94 1.94 0 0 1-2 0V9zm-2 2v1.278a1.94 1.94 0 0 1 2 0V11z"
      className="object-ungroup_svg__uim-quaternary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgObjectUngroup)
export default ForwardRef
