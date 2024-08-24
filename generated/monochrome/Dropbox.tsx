import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDropbox = (
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
      fillRule="evenodd"
      d="M16.53 10.091 21 12.939l-4.502 2.868L12 12.941l-4.498 2.866L3 12.939l4.47-2.848L3 7.243l4.502-2.868L12 7.241l4.498-2.866L21 7.243z"
      className="dropbox_svg__uim-primary"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M16.467 10.091 12 7.245l-4.467 2.846L12 12.936z"
      className="dropbox_svg__uim-quaternary"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="m7.531 16.757-.029-.95L12 12.941l4.498 2.866.036.95-4.502 2.868z"
      className="dropbox_svg__uim-tertiary"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDropbox)
export default ForwardRef
