import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExclamationTriangle = (
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
      d="M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22"
      className="exclamation-triangle_svg__uim-tertiary"
    />
    <circle
      cx={12}
      cy={17}
      r={1}
      className="exclamation-triangle_svg__uim-primary"
    />
    <path
      d="M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
      className="exclamation-triangle_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgExclamationTriangle)
export default ForwardRef
