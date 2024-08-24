import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCornerUpLeft = (
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
      d="M14.686 6.628H7.729l2.92-2.921a1 1 0 0 0-1.413-1.414L4.608 6.921a1.003 1.003 0 0 0 0 1.415l4.628 4.628a1 1 0 0 0 1.414-1.414L7.728 8.628h6.958a3.003 3.003 0 0 1 3 3V21a1 1 0 0 0 2 0v-9.372a5.006 5.006 0 0 0-5-5"
      className="corner-up-left_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerUpLeft)
export default ForwardRef
