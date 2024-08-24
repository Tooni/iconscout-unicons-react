import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTumblrSquare = (
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
    <path
      d="M13.571 17.85a3.396 3.396 0 0 1-3.747-3.332v-4.076H8.562v-1.61a3.82 3.82 0 0 0 2.454-3.363.1.1 0 0 1 .09-.093h1.827v3.178h2.496v1.888h-2.505v3.884a1.094 1.094 0 0 0 1.2 1.229 3 3 0 0 0 1.007-.215l.6 1.779c-.611.49-1.376.75-2.16.73z"
      className="tumblr-square_svg__uim-tertiary"
    />
    <path
      d="M2.019 2v20h19.963V2zm11.552 15.85a3.396 3.396 0 0 1-3.747-3.332v-4.076H8.562v-1.61a3.82 3.82 0 0 0 2.454-3.363.1.1 0 0 1 .09-.093h1.827v3.178h2.496v1.888h-2.505v3.884a1.094 1.094 0 0 0 1.2 1.229 3 3 0 0 0 1.007-.215l.6 1.779c-.611.49-1.376.75-2.16.73z"
      className="tumblr-square_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTumblrSquare)
export default ForwardRef
