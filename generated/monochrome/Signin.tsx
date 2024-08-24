import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSignIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20 11h-8.586l2.293-2.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L11.414 13H20Z"
      className="sign-in_svg__uim-primary"
    />
    <path
      d="M11.414 11H20V5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h10a3.003 3.003 0 0 0 3-3v-6h-8.586l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414Z"
      className="sign-in_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSignIn)
export default ForwardRef
SvgSignin)
export default ForwardRef
