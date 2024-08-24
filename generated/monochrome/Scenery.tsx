import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgScenery = (
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
      d="M13.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
      className="scenery_svg__uim-quaternary"
    />
    <path
      d="M19 2H5a3.01 3.01 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887.888-.888a3.01 3.01 0 0 1 4.242 0L22 15.86V5a3.01 3.01 0 0 0-3-3m-5.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
      className="scenery_svg__uim-tertiary"
    />
    <path
      d="M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.01 3.01 0 0 0 3 3h14a3 3 0 0 0 2.16-.92z"
      className="scenery_svg__uim-primary"
    />
    <path
      d="m22 15.858-3.879-3.879a3.01 3.01 0 0 0-4.242 0l-.888.888 8.165 8.209c.542-.555.845-1.3.844-2.076z"
      className="scenery_svg__uim-quaternary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgScenery)
export default ForwardRef
