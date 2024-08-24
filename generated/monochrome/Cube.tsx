import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 12.3 3.5 7.05 12 1.8l8.5 5.25z"
      className="cube_svg__uim-primary"
    />
    <path
      d="M12 22.2v-9.9l8.5-5.25v9.9z"
      className="cube_svg__uim-quaternary"
    />
    <path
      d="m12 22.2-8.5-5.25v-9.9L12 12.3z"
      className="cube_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCube)
export default ForwardRef
