import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M19.5 6H16V5a2.003 2.003 0 0 0-2-2h-4a2.003 2.003 0 0 0-2 2v1H4.5A2.5 2.5 0 0 0 2 8.5v10A2.5 2.5 0 0 0 4.5 21h15a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 19.5 6M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm12 13.5c0 .828-.672 1.5-1.5 1.5h-15c-.828 0-1.5-.672-1.5-1.5v-6.473l5.842 1.948A.5.5 0 0 0 9 14h6a.5.5 0 0 0 .158-.025L21 12.027zm0-7.494a.5.5 0 0 0-.158.02L14.919 13H9.081l-5.923-1.975a.5.5 0 0 0-.158-.02V8.5C3 7.672 3.672 7 4.5 7h15c.828 0 1.5.672 1.5 1.5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBag)
export default ForwardRef
