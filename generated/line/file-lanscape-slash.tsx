import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFileLanscapeSlash = (
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
    <path d="M22 10.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.09a.9.9 0 0 0-.33-.11h-4.39a1 1 0 0 0 0 2H14v3a3 3 0 0 0 3 3h3v3.34a1 1 0 1 0 2 0v-4.4M17 10a1 1 0 0 1-1-1V7.41L18.59 10ZM3.71 2.29a1 1 0 0 0-1.42 1.42l.91.9A3 3 0 0 0 2 7v10a3 3 0 0 0 3 3h13.59l1.7 1.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM5 18a1 1 0 0 1-1-1V7a1 1 0 0 1 .66-.93L16.59 18Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgFileLanscapeSlash)
export default ForwardRef
