import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSanitizerAlt = (
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
      d="M12 3v1h2V3h1a1 1 0 0 0 0-2h-4.764a4.59 4.59 0 0 0-4.13 2.553 1 1 0 0 0 1.789.894A2.6 2.6 0 0 1 10.235 3Z"
      className="sanitizer-alt_svg__uim-tertiary"
    />
    <path
      d="M16 5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h6zm-2 12h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2"
      className="sanitizer-alt_svg__uim-primary"
    />
    <path
      d="M16 8h-6a3.003 3.003 0 0 0-3 3v9a3.003 3.003 0 0 0 3 3h6a3.003 3.003 0 0 0 3-3v-9a3.003 3.003 0 0 0-3-3m-2 9h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2"
      className="sanitizer-alt_svg__uim-quaternary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSanitizerAlt)
export default ForwardRef
