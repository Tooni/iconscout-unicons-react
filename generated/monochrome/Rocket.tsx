import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRocket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m17.737 14.622-2.426 2.23a11.6 11.6 0 0 1-4.299 2.37l.644 3.004a1 1 0 0 0 1.469.661l3.905-2.202a3.035 3.035 0 0 0 1.375-3.304zM7.266 8.776l2.088-2.48-2.604-.628a2.78 2.78 0 0 0-3.387 1.357l-2.2 3.9a1 1 0 0 0 .661 1.469l3.073.659a12.9 12.9 0 0 1 2.369-4.277m9.468.04a1.5 1.5 0 1 0-1.5-1.5 1.5 1.5 0 0 0 1.5 1.5"
      className="rocket_svg__uim-primary"
    />
    <path
      d="M22.601 2.062a1 1 0 0 0-.713-.713A11.25 11.25 0 0 0 10.47 4.972L7.266 8.776a12.94 12.94 0 0 0-2.924 6.71 1 1 0 0 0 .284.837l3.1 3.1a1 1 0 0 0 .708.293 1 1 0 0 0 .086-.004 11.85 11.85 0 0 0 6.79-2.86l3.664-3.368A11.2 11.2 0 0 0 22.6 2.062Zm-5.867 6.754a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5"
      className="rocket_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRocket)
export default ForwardRef
