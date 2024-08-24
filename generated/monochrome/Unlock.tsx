import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUnlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7 9h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3"
      className="unlock_svg__uim-primary"
    />
    <path
      d="M9 7a3.002 3.002 0 0 1 5.116-2.13c.378.383.65.858.786 1.379l.002.007a1 1 0 0 0 1.934-.505 5.1 5.1 0 0 0-1.306-2.293A5.002 5.002 0 0 0 7 7v2h2z"
      className="unlock_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUnlock)
export default ForwardRef