import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHeadSideMask = (
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
    <path d="M13.23 2.003a7.37 7.37 0 0 0-5.453 2.114A7.44 7.44 0 0 0 5.5 9.465l-1.844 2.998a1 1 0 0 0-.156.52v.04a1 1 0 0 0 .07.347l1.44 3.873a1 1 0 0 0 .043.099A2.98 2.98 0 0 0 7.736 19H8.5v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 .321-.053l3.7-1.256a1 1 0 0 0 .018.12l1 3.466A1 1 0 0 0 18.5 22a1 1 0 0 0 .277-.04 1 1 0 0 0 .684-1.237l-.924-3.2 1.93-7.267A1 1 0 0 0 20.5 10v-.228a7.7 7.7 0 0 0-7.27-7.769M11.5 17H7.736a1 1 0 0 1-.874-.513L5.938 14H11.5Zm5.523-1.591L13.5 16.605V13.72l4.345-1.448Zm1.412-5.389a1 1 0 0 0-.251.031L12.337 12H6.29l1.074-1.747a1 1 0 0 0 .148-.562L7.5 9.5a5.46 5.46 0 0 1 1.67-3.947 5.52 5.52 0 0 1 4-1.55 5.685 5.685 0 0 1 5.33 5.77Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHeadSideMask)
export default ForwardRef
