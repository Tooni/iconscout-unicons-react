import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgOperaAlt = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path
      d="M11.996 2c-5.462 0-9.278 3.958-9.278 9.899C2.718 17.189 6.43 22 12.004 22c5.567 0 9.278-4.819 9.278-10.101 0-5.94-3.824-9.899-9.286-9.899m0 16c-2.397 0-2.66-3.536-2.66-6.143v-.052C9.336 8.987 9.758 6 11.979 6s2.67 3.076 2.67 5.894c0 2.607-.258 6.106-2.654 6.106Z"
      className="opera-alt_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgOperaAlt)
export default ForwardRef
