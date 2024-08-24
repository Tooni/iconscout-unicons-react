import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgObjectUngroup = (
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
    <path d="M21 18.3v-6.6c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2-.7 0-1.4.4-1.7 1H15V5.7c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2-.7 0-1.4.4-1.7 1H5.7c-.3-.6-1-1-1.7-1-1.1 0-2 .9-2 2 0 .7.4 1.4 1 1.7v6.6c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2 .7 0 1.4-.4 1.7-1H9v3.3c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2 .7 0 1.4-.4 1.7-1h6.6c.3.6 1 1 1.7 1 1.1 0 2-.9 2-2 0-.7-.4-1.4-1-1.7M5.7 13c-.2-.3-.4-.5-.7-.7V5.7c.3-.2.5-.4.7-.7h6.6c.2.3.4.5.7.7V9h-1.3c-.3-.6-1-1-1.7-1-1.1 0-2 .9-2 2 0 .7.4 1.4 1 1.7V13zm7.3-.7c-.3.2-.5.4-.7.7H11v-1.3c.3-.2.5-.4.7-.7H13zm-.7 2.7c.3.6 1 1 1.7 1 1.1 0 2-.9 2-2 0-.7-.4-1.4-1-1.7V11h3.3c.2.3.4.5.7.7v6.6c-.3.2-.5.4-.7.7h-6.6c-.2-.3-.4-.5-.7-.7V15z" />
  </svg>
)
const ForwardRef = forwardRef(SvgObjectUngroup)
export default ForwardRef
