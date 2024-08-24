import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCommentMessage = (
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
      d="M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"
      className="comment-message_svg__uim-primary"
    />
    <path
      d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20M9 7h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m2-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"
      className="comment-message_svg__uim-tertiary"
    />
    <path
      d="M15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m0-8H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2"
      className="comment-message_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentMessage)
export default ForwardRef
