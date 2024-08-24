import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCommentAlt = (
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
      d="M21 22a1 1 0 0 1-.707-.293L16.586 18H5a3.003 3.003 0 0 1-3-3V5a3.003 3.003 0 0 1 3-3h14a3.003 3.003 0 0 1 3 3v16a1 1 0 0 1-1 1"
      className="comment-alt_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentAlt)
export default ForwardRef
