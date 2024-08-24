import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgIntercom = (
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
    <path d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2m-4.83 3.67a.66.66 0 0 1 .67-.67.68.68 0 0 1 .66.66v8.9a.67.67 0 0 1-1.33 0Zm-3.34-.34a.67.67 0 0 1 .67-.67.67.67 0 0 1 .67.67V15a.67.67 0 0 1-1.34 0ZM8 5.67a.67.67 0 0 1 1.33 0v8.9a.66.66 0 0 1-.67.66.68.68 0 0 1-.66-.66ZM4.67 7A.67.67 0 0 1 6 7v6a.67.67 0 0 1-.67.66.67.67 0 0 1-.66-.66ZM19.1 17.17a11.3 11.3 0 0 1-7.1 2.16 11.3 11.3 0 0 1-7.1-2.16.67.67 0 0 1 .87-1A10.2 10.2 0 0 0 12 18a10.15 10.15 0 0 0 6.23-1.84.67.67 0 0 1 .87 1Zm.23-4.17A.67.67 0 0 1 18 13V7a.67.67 0 0 1 .67-.66.66.66 0 0 1 .66.66Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgIntercom)
export default ForwardRef
