import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="M21.49 4.73 17 2.17a1 1 0 0 0-1 0l-4 2.28-4-2.28a1 1 0 0 0-1 0L2.51 4.73A1 1 0 0 0 2 5.6v5.12a1 1 0 0 0 .51.87l4 2.27v4.54a1 1 0 0 0 .51.87l4.5 2.56a1 1 0 0 0 1 0L17 19.27a1 1 0 0 0 .51-.87v-4.54l4-2.27a1 1 0 0 0 .51-.87V5.6a1 1 0 0 0-.53-.87M4 10.14v-4l3.5-2 3.5 2v4l-3.5 2Zm11.5 7.68-3.5 2-3.5-2v-4l3.5-2 3.5 2Zm4.5-7.68-3.5 2-3.5-2v-4l3.5-2 3.5 2Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCell)
export default ForwardRef
