import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWindows = (
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
      d="m2.03 4.832 8.147-1.11.004 7.86-8.144.046zm8.144 7.655.006 7.867-8.144-1.12-.001-6.8zm.987-8.91L21.965 2v9.482l-10.804.085zm10.807 8.984L21.965 22l-10.804-1.525-.015-7.932Z"
      className="windows_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWindows)
export default ForwardRef
