import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgQuestion = (
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
    <path d="M15.333 9.5A3.5 3.5 0 0 0 8.8 7.75a1 1 0 0 0 1.733 1A1.5 1.5 0 0 1 11.833 8a1.5 1.5 0 1 1 0 3h-.003a1 1 0 0 0-.19.039 1 1 0 0 0-.198.04 1 1 0 0 0-.155.105 1 1 0 0 0-.162.11 1 1 0 0 0-.117.174 1 1 0 0 0-.097.144 1 1 0 0 0-.043.212 1 1 0 0 0-.035.176v1l.002.011v.491a1 1 0 0 0 1 .998h.003a1 1 0 0 0 .998-1.002l-.002-.662A3.49 3.49 0 0 0 15.333 9.5m-4.203 6.79a1 1 0 0 0 .7 1.71 1.04 1.04 0 0 0 .71-.29 1.015 1.015 0 0 0 0-1.42 1.034 1.034 0 0 0-1.41 0" />
  </svg>
)
const ForwardRef = forwardRef(SvgQuestion)
export default ForwardRef
