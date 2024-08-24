import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBlogger = (
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
      fillRule="evenodd"
      d="m18.333 10.922-.11-.222-.178-.14c-.235-.184-1.423.011-1.742-.278-.228-.208-.263-.584-.33-1.09a3.15 3.15 0 0 0-.362-1.367 4.46 4.46 0 0 0-3.12-2.2H9.667a4.053 4.053 0 0 0-4.042 4.03v4.695a4.05 4.05 0 0 0 4.042 4.025h4.639a4.05 4.05 0 0 0 4.038-4.022l.02-2.675.005-.579zM9.718 8.917h2.24a.77.77 0 0 1 0 1.541h-2.24a.77.77 0 0 1 0-1.541m4.55 6.125h-4.55a.75.75 0 1 1 0-1.5h4.55a.75.75 0 1 1 0 1.5"
      className="blogger_svg__uim-tertiary"
      clipRule="evenodd"
    />
    <path
      d="M14.267 13.542H9.673a.75.75 0 0 0 .045 1.5h4.587a.75.75 0 0 0-.038-1.5m-4.549-3.084h2.24a.77.77 0 1 0 0-1.541h-2.24a.77.77 0 1 0 0 1.541"
      className="blogger_svg__uim-primary"
    />
    <path
      d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2m-1.136 9.678-.02 2.675a4.05 4.05 0 0 1-4.038 4.022h-4.64a4.05 4.05 0 0 1-4.041-4.025V9.656a4.053 4.053 0 0 1 4.042-4.031h2.824a4.46 4.46 0 0 1 3.12 2.2c.222.422.346.89.362 1.367.067.506.102.882.33 1.09.32.29 1.507.094 1.742.278l.179.14.109.222.036.177z"
      className="blogger_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBlogger)
export default ForwardRef
