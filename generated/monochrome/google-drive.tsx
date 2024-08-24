import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGoogleDrive = (
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
      d="M15.334 14.887H22l-6.666-11.55H8.667z"
      className="google-drive_svg__uim-quaternary"
    />
    <path
      d="M8.667 3.338 2 14.888l3.334 5.774L12 9.112z"
      className="google-drive_svg__uim-primary"
    />
    <path
      d="m8.667 14.887-3.333 5.775h13.333L22 14.887z"
      className="google-drive_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGoogleDrive)
export default ForwardRef
