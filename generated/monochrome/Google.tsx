import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGoogle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12.222 5.977a5.4 5.4 0 0 1 3.823 1.496l2.868-2.868A9.6 9.6 0 0 0 12.222 2a10 10 0 0 0-8.937 5.51l3.341 2.59a5.96 5.96 0 0 1 5.596-4.123"
      className="google_svg__uim-secondary"
    />
    <path
      d="M3.285 7.51a10.01 10.01 0 0 0 0 8.98l3.341-2.59a5.9 5.9 0 0 1 0-3.8z"
      className="google_svg__uim-primary"
    />
    <path
      d="M15.608 17.068A6.033 6.033 0 0 1 6.626 13.9l-3.34 2.59A10 10 0 0 0 12.221 22a9.55 9.55 0 0 0 6.618-2.423z"
      className="google_svg__uim-tertiary"
    />
    <path
      d="M21.64 10.182h-9.418v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018l-.01.006.01-.006 3.232 2.51a9.75 9.75 0 0 0 2.982-7.35q0-1.032-.182-2.046"
      className="google_svg__uim-quaternary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGoogle)
export default ForwardRef
