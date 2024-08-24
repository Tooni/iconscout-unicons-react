import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCommentDots = (
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
    <circle cx={12} cy={12} r={1} className="comment-dots_svg__uim-primary" />
    <path
      d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20M8 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1"
      className="comment-dots_svg__uim-tertiary"
    />
    <circle cx={8} cy={12} r={1} className="comment-dots_svg__uim-primary" />
    <circle cx={16} cy={12} r={1} className="comment-dots_svg__uim-primary" />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentDots)
export default ForwardRef
