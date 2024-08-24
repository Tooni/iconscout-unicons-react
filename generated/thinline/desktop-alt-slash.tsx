import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDesktopAltSlash = (
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
    <path d="M7.8 4h10.7c.8 0 1.5.7 1.5 1.5V12h-3.2c-.3 0-.5.2-.5.5s.2.5.5.5H20v1.5c0 .4-.1.7-.3 1-.1.1-.1.2-.1.3 0 .3.2.5.5.5.1 0 .3-.1.4-.2.4-.4.6-1 .6-1.6v-9C21 4.1 19.9 3 18.5 3H7.8c-.3 0-.5.2-.5.5s.2.5.5.5m14.1 17.1-5-5-4-4-8.4-8.3-.1-.1h-.1L2.9 2.1c-.2-.1-.5-.1-.7 0-.2.2-.2.6-.1.8l1.3 1.3c-.3.3-.4.8-.4 1.3v9C3 15.9 4.1 17 5.5 17H9v3H5.5c-.3 0-.5.2-.5.5s.2.5.5.5h13c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H15v-3h1.3l4.9 4.9c.1.1.2.1.4.1.1 0 .3-.1.4-.1 0-.2 0-.6-.1-.8M4 5.5c0-.2.1-.4.2-.6l7.1 7.1H4zM14 20h-4v-3h4zm-8.5-4c-.8 0-1.5-.7-1.5-1.5V13h8.3l3 3z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDesktopAltSlash)
export default ForwardRef
