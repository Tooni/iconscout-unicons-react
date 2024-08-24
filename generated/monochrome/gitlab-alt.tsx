import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGitlabAlt = (
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
    <g data-name="logo art">
      <path
        d="m12 21.42 3.684-11.333H8.32z"
        className="gitlab-alt_svg__uim-primary"
      />
      <path
        d="m3.16 10.087-1.123 3.444a.76.76 0 0 0 .277.852l9.685 7.038z"
        className="gitlab-alt_svg__uim-quaternary"
      />
      <path
        d="M3.16 10.087h5.16L6.1 3.262a.383.383 0 0 0-.728 0z"
        className="gitlab-alt_svg__uim-primary"
      />
      <path
        d="m20.845 10.087 1.118 3.444a.76.76 0 0 1-.276.852l-9.688 7.038z"
        className="gitlab-alt_svg__uim-quaternary"
      />
      <path
        d="M20.845 10.087h-5.161L17.9 3.262a.383.383 0 0 1 .727 0l2.217 6.825Z"
        className="gitlab-alt_svg__uim-primary"
      />
      <path
        d="m11.999 21.421 3.685-11.334h5.161zM11.999 21.421l-8.84-11.334H8.32z"
        className="gitlab-alt_svg__uim-tertiary"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgGitlabAlt)
export default ForwardRef
