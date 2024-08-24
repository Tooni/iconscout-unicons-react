import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTriangle = (
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
      d="M21 20.794H3a1 1 0 0 1-.866-1.5l9-15.588a1.04 1.04 0 0 1 1.732 0l9 15.588a1 1 0 0 1-.866 1.5"
      className="triangle_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTriangle)
export default ForwardRef
