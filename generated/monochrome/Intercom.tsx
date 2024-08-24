import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgIntercom = (
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
      d="M19.333 12.996a.667.667 0 0 1-1.333 0V7a.667.667 0 0 1 1.333 0zm-.232 4.173A11.33 11.33 0 0 1 12 19.329a11.33 11.33 0 0 1-7.1-2.16.667.667 0 1 1 .866-1.014A10.23 10.23 0 0 0 12 17.995c2.224.091 4.414-.556 6.233-1.839a.667.667 0 1 1 .868 1.013M4.667 7A.667.667 0 0 1 6 7v5.996a.667.667 0 0 1-1.333 0zM8 5.667a.667.667 0 0 1 1.333 0v8.906a.667.667 0 0 1-1.333 0zm3.333-.338a.667.667 0 0 1 1.333 0v9.667a.667.667 0 0 1-1.333 0zm3.334.338a.667.667 0 0 1 1.333 0v8.906a.667.667 0 0 1-1.333 0z"
      className="intercom_svg__uim-tertiary"
    />
    <path
      d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2m-4.833 3.667a.667.667 0 0 1 1.333 0v8.906a.667.667 0 0 1-1.333 0zm-3.334-.338a.667.667 0 0 1 1.333 0v9.667a.667.667 0 0 1-1.333 0zM8 5.667a.667.667 0 0 1 1.333 0v8.906a.667.667 0 0 1-1.333 0zM4.667 7A.667.667 0 0 1 6 7v5.996a.667.667 0 0 1-1.333 0zM19.1 17.169A11.33 11.33 0 0 1 12 19.329a11.33 11.33 0 0 1-7.1-2.16.667.667 0 1 1 .866-1.014A10.23 10.23 0 0 0 12 17.995c2.224.091 4.414-.556 6.233-1.838a.667.667 0 1 1 .868 1.012m.232-4.173a.667.667 0 0 1-1.333 0V7a.667.667 0 0 1 1.333 0z"
      className="intercom_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgIntercom)
export default ForwardRef
