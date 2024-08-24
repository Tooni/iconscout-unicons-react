import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPagelines = (
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
    <path
      d="M15.1 14.006a10.7 10.7 0 0 1-.895 2.275 3.5 3.5 0 0 1 1.36-.456c1.957-.21 3.75 1.543 3.75 1.543s-1.38 2.092-3.34 2.299a4.95 4.95 0 0 1-3.337-1.194A10.79 10.79 0 0 1 4.67 22a.672.672 0 0 1 0-1.344 9.42 9.42 0 0 0 5.845-2.032 3.75 3.75 0 0 1-1.735-.243c-1.816-.76-2.536-3.162-2.536-3.162s2.215-1.167 4.028-.404a4.4 4.4 0 0 1 2.012 1.98 9.4 9.4 0 0 0 1.458-2.9 4.72 4.72 0 0 1-3.258-.076c-1.773-.852-2.376-3.284-2.376-3.284s2.275-1.056 4.049-.203a4.4 4.4 0 0 1 1.9 2.058 9 9 0 0 0 .076-1.01 6.82 6.82 0 0 1-2.518-4.03C11.268 4.582 13.71 2 13.71 2s3.002 1.901 3.346 4.664a7 7 0 0 1-1.583 4.726 9 9 0 0 1-.06.99 4.2 4.2 0 0 1 1.7-1.822c1.75-.905 4.054.085 4.054.085s-.532 2.449-2.282 3.35a5.15 5.15 0 0 1-3.786.013Zm0 0"
      className="pagelines_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPagelines)
export default ForwardRef
