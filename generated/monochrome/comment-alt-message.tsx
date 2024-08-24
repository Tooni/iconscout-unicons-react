import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCommentAltMessage = (
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
      d="M17 9H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m0 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"
      className="comment-alt-message_svg__uim-primary"
    />
    <path
      d="M19 2H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h11.586l3.707 3.707A1 1 0 0 0 22 21V5a3.003 3.003 0 0 0-3-3m-2 11H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m0-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"
      className="comment-alt-message_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentAltMessage)
export default ForwardRef
