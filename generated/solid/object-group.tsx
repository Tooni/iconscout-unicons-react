import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgObjectGroup = (
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
    <path d="M21 18.3V5.7c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2-.7 0-1.4.4-1.7 1H5.7c-.3-.6-1-1-1.7-1-1.1 0-2 .9-2 2 0 .7.4 1.4 1 1.7v12.6c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2 .7 0 1.4-.4 1.7-1h12.6c.3.6 1 1 1.7 1 1.1 0 2-.9 2-2 0-.7-.4-1.4-1-1.7m-2 0c-.3.2-.5.4-.7.7H5.7c-.2-.3-.4-.5-.7-.7V5.7c.3-.2.5-.4.7-.7h12.6c.2.3.4.5.7.7zM14 9V8c0-.6-.4-1-1-1H8c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h1v-3c0-1.1.9-2 2-2zm2 1h-5c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgObjectGroup)
export default ForwardRef
