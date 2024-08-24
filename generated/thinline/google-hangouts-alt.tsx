import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGoogleHangoutsAlt = (
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
    <path d="M14.992 8a2 2 0 0 0 0 4c.358-.002.71-.101 1.016-.287V12a1 1 0 0 1-1 1 .5.5 0 0 0 0 1 2.003 2.003 0 0 0 2-2v-2a.5.5 0 0 0-.032-.156A1.997 1.997 0 0 0 14.992 8m0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2M13.34 1.082A10 10 0 0 0 12 1C6.628.985 2.262 5.328 2.248 10.7a9.726 9.726 0 0 0 9.252 9.74v2.06a.5.5 0 0 0 .5.5q.06 0 .12-.015a12.625 12.625 0 0 0 9.55-11.056c.695-5.296-3.035-10.152-8.33-10.847m7.337 10.74A11.63 11.63 0 0 1 12.5 21.843v-1.89a.5.5 0 0 0-.5-.5 8.788 8.788 0 1 1 8.676-7.633M8.992 8a2 2 0 0 0 0 4c.358-.002.71-.101 1.016-.287V12a1 1 0 0 1-1 1 .5.5 0 0 0 0 1 2.003 2.003 0 0 0 2-2v-2a.5.5 0 0 0-.032-.156A1.997 1.997 0 0 0 8.992 8m0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgGoogleHangoutsAlt)
export default ForwardRef
