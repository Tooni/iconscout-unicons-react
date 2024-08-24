import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHouseUser = (
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
      d="M12 18a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 12 18"
      className="house-user_svg__uim-tertiary"
    />
    <path
      d="M14.64 16.772a3.452 3.452 0 0 1-5.28 0A4.99 4.99 0 0 0 7 21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.99 4.99 0 0 0-2.36-4.228"
      className="house-user_svg__uim-primary"
    />
    <path
      d="M21 12a1 1 0 0 1-.664-.252L12 4.338l-8.336 7.41a1 1 0 0 1-1.328-1.496l9-8a1 1 0 0 1 1.328 0l9 8A1 1 0 0 1 21 12"
      className="house-user_svg__uim-tertiary"
    />
    <path
      d="m12 4.338-8 7.111V21a1 1 0 0 0 1 1h3a1 1 0 0 1-1-1 4.99 4.99 0 0 1 2.36-4.228A3.47 3.47 0 0 1 8.5 14.5a3.5 3.5 0 0 1 7 0 3.47 3.47 0 0 1-.86 2.272A4.99 4.99 0 0 1 17 21a1 1 0 0 1-1 1h3a1 1 0 0 0 1-1v-9.551Z"
      className="house-user_svg__uim-quaternary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHouseUser)
export default ForwardRef
