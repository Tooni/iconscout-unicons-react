import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGoogleDriveAlt = (
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
      d="m6 19.796 3-5.197h12l-3 5.197z"
      className="google-drive-alt_svg__uim-primary"
    />
    <path
      d="M15 14.599h6L15 4.204H9z"
      className="google-drive-alt_svg__uim-quaternary"
    />
    <path
      d="m3 14.599 3 5.197L12 9.4 9 4.204 3 14.6z"
      className="google-drive-alt_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGoogleDriveAlt)
export default ForwardRef
