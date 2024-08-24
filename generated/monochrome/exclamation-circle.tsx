import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExclamationCircle = (
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
    <circle
      cx={12}
      cy={12}
      r={10}
      className="exclamation-circle_svg__uim-tertiary"
    />
    <circle
      cx={12}
      cy={16}
      r={1}
      className="exclamation-circle_svg__uim-primary"
    />
    <path
      d="M12 13a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
      className="exclamation-circle_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgExclamationCircle)
export default ForwardRef
