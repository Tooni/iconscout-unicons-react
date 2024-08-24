import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCommentAltDots = (
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
      d="M19 2H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h11.586l3.707 3.707A1 1 0 0 0 22 21V5a3.003 3.003 0 0 0-3-3M8 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1"
      className="comment-alt-dots_svg__uim-tertiary"
    />
    <circle
      cx={8}
      cy={10}
      r={1}
      className="comment-alt-dots_svg__uim-primary"
    />
    <circle
      cx={12}
      cy={10}
      r={1}
      className="comment-alt-dots_svg__uim-primary"
    />
    <circle
      cx={16}
      cy={10}
      r={1}
      className="comment-alt-dots_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentAltDots)
export default ForwardRef
