import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTumblrAlt = (
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
    <path d="m17.434 20.508-.962-2.853a1 1 0 0 0-1.38-.583 3.8 3.8 0 0 1-1.208.249.94.94 0 0 1-.66-.165 1.2 1.2 0 0 1-.239-.808V12h3.017a1 1 0 0 0 1-1V7.095a1 1 0 0 0-1-1H13V2a1 1 0 0 0-1-1H9.07a1.15 1.15 0 0 0-1.137 1.04 5.09 5.09 0 0 1-3.28 4.558 1 1 0 0 0-.662.94v3.585a1 1 0 0 0 1 1h1.025v4.535a6.4 6.4 0 0 0 1.886 4.478A6.9 6.9 0 0 0 12.877 23h.163c1.546-.026 3.618-.648 4.273-1.608a1 1 0 0 0 .12-.883m-4.427.49a4.87 4.87 0 0 1-3.702-1.288 4.37 4.37 0 0 1-1.29-3.052v-5.535a1 1 0 0 0-1-1H5.992V8.206A6.95 6.95 0 0 0 9.81 3H11v4.095a1 1 0 0 0 1 1h3.002V10h-3.017a1 1 0 0 0-1 1v5.365a3.08 3.08 0 0 0 .857 2.235 2.77 2.77 0 0 0 2.096.72 6 6 0 0 0 .947-.113l.425 1.26a5.9 5.9 0 0 1-2.303.531" />
  </svg>
)
const ForwardRef = forwardRef(SvgTumblrAlt)
export default ForwardRef
