import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUtensilsAlt = (
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
    <path d="M15.53 14.13a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l6.18 6.18a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41Zm1.23-2.49a3 3 0 0 0 2.12-.88l2.83-2.83a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0l-2.83 2.83a1 1 0 0 1-1.41 0l3.54-3.54a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0l-3.53 3.53a1 1 0 0 1 0-1.41l2.82-2.83a1 1 0 1 0-1.41-1.41l-2.83 2.83a3 3 0 0 0 0 4.24L12 10.59l-1.56-1.54a4.16 4.16 0 0 0-.74-5C8.26 2.61 4.53 1 2.77 2.79S2.6 8.27 4 9.72A4.36 4.36 0 0 0 6.94 11h.14A3.9 3.9 0 0 0 9 10.46L10.57 12l-8.28 8.28a1 1 0 1 0 1.42 1.41l9-9 1.92-1.92a3 3 0 0 0 2.13.87m-8.33-3.2A1.93 1.93 0 0 1 7 9a2.26 2.26 0 0 1-1.54-.7C4.38 7.22 3.62 4.77 4.19 4.2a1 1 0 0 1 .66-.2 5.87 5.87 0 0 1 3.44 1.47 2.12 2.12 0 0 1 .14 2.97" />
  </svg>
)
const ForwardRef = forwardRef(SvgUtensilsAlt)
export default ForwardRef
