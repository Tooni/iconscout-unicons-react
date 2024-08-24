import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHeadSideCough = (
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
    <path d="M4.293 20.293a1 1 0 1 0 1.414 0 1 1 0 0 0-1.414 0m-3-3a1 1 0 1 0 1.414 0 1 1 0 0 0-1.414 0m4-1a1 1 0 1 0 1.414 0 1 1 0 0 0-1.414 0M16.15 2.002a7.067 7.067 0 0 0-7.284 7.063v.016l-1.77 3.758A1 1 0 0 0 8 14.267h.866v1.8A1.935 1.935 0 0 0 10.8 18h.867v1.8a1 1 0 0 0 2 0v-1.814A.994.994 0 0 0 13.6 16l-.833.02a1 1 0 0 0-.1-.02 1 1 0 0 0-.128.026l-1.673.04v-2.8a1 1 0 0 0-1-1h-.289l1.205-2.558a1 1 0 0 0 .095-.468l-.01-.174a5.03 5.03 0 0 1 1.537-3.635 5.1 5.1 0 0 1 3.686-1.429A5.24 5.24 0 0 1 21 9.322l-1.833 6.987a1 1 0 0 0 .006.533l.932 3.235a1 1 0 0 0 .961.723 1 1 0 0 0 .278-.04 1 1 0 0 0 .683-1.237l-.856-2.97 1.796-6.763A1 1 0 0 0 23 9.533v-.212a7.25 7.25 0 0 0-6.85-7.318Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHeadSideCough)
export default ForwardRef
