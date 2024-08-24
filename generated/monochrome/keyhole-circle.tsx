import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgKeyholeCircle = (
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
      d="M14 10a2 2 0 1 0-3 1.723V15a1 1 0 0 0 2 0v-3.277A1.99 1.99 0 0 0 14 10"
      className="keyhole-circle_svg__uim-primary"
    />
    <path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 9.723V15a1 1 0 0 1-2 0v-3.277a2 2 0 1 1 2 0"
      className="keyhole-circle_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgKeyholeCircle)
export default ForwardRef
