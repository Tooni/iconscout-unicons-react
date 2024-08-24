import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUserArrows = (
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
      d="M6 16.5A3.5 3.5 0 1 1 9.5 13 3.504 3.504 0 0 1 6 16.5"
      className="user-arrows_svg__uim-quaternary"
    />
    <path
      d="M8.64 15.272a3.452 3.452 0 0 1-5.28 0A4.99 4.99 0 0 0 1 19.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.99 4.99 0 0 0-2.36-4.228M18 16.5a3.5 3.5 0 1 1 3.5-3.5 3.504 3.504 0 0 1-3.5 3.5"
      className="user-arrows_svg__uim-tertiary"
    />
    <path
      d="M20.64 15.272a3.452 3.452 0 0 1-5.28 0A4.99 4.99 0 0 0 13 19.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.99 4.99 0 0 0-2.36-4.228"
      className="user-arrows_svg__uim-secondary"
    />
    <path
      d="m17.207 5.793-2-2a1 1 0 0 0-1.414 1.414l.293.293H9.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L9.914 7.5h4.172l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414"
      className="user-arrows_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUserArrows)
export default ForwardRef
