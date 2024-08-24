import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSignOutAlt = (
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
      d="m15.707 11.293-4-4a1 1 0 0 0-1.414 1.414L12.586 11H2.05c-.03.33-.05.66-.05 1s.02.67.05 1h10.536l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414"
      className="sign-out-alt_svg__uim-primary"
    />
    <path
      d="M12 2a10 10 0 0 0-9.95 9h10.536l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 13H2.05A10 10 0 1 0 12 2"
      className="sign-out-alt_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSignOutAlt)
export default ForwardRef
