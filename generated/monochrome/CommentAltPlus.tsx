import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCommentAltPlus = (
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
      d="M15 9h-2V7a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2"
      className="comment-alt-plus_svg__uim-primary"
    />
    <path
      d="M19 2H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h11.586l3.707 3.707A1 1 0 0 0 22 21V5a3.003 3.003 0 0 0-3-3m-4 9h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V7a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2"
      className="comment-alt-plus_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentAltPlus)
export default ForwardRef
