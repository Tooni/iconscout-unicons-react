import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVkAlt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M15.375 13.867a5 5 0 0 0-1.552-1.13 7.36 7.36 0 0 0 3.315-4.627.5.5 0 1 0-.975-.22 6.36 6.36 0 0 1-3.68 4.428c-.109-.018-.22-.023-.329-.034V8.002a.5.5 0 0 0-.026-.129 1 1 0 0 0-.013-.064.5.5 0 0 0-.095-.143q-.006-.009-.011-.016a.5.5 0 0 0-.12-.082c-.014-.008-.025-.02-.039-.026a.5.5 0 0 0-.103-.021.5.5 0 0 0-.09-.019l-.655-.002H11a.5.5 0 0 0-.002 1h.152v5.46q.002.01.004.02v.998a11.8 11.8 0 0 1-4.007-7.059.51.51 0 0 0-.576-.41.5.5 0 0 0-.41.576 12.84 12.84 0 0 0 5.2 8.322c.01.007.022.004.031.01a.5.5 0 0 0 .262.085.5.5 0 0 0 .212-.051l.016-.004c.01-.005.016-.018.026-.024a.5.5 0 0 0 .18-.186.5.5 0 0 0 .066-.235v-2.74a4.06 4.06 0 0 1 2.485 1.281l1.647 1.797a.499.499 0 1 0 .736-.676zM15.073 1.5H8.938C3.029 1.5 1.5 3.027 1.5 8.927v6.136c0 5.908 1.527 7.437 7.427 7.437h6.136c5.908 0 7.437-1.527 7.437-7.427V8.938c0-5.909-1.527-7.438-7.427-7.438M21.5 15.073c0 5.346-1.083 6.427-6.437 6.427H8.927C3.58 21.5 2.5 20.417 2.5 15.063V8.927C2.5 3.58 3.583 2.5 8.938 2.5h6.135c5.346 0 6.427 1.083 6.427 6.438z" />
  </svg>
)
const ForwardRef = forwardRef(SvgVkAlt)
export default ForwardRef