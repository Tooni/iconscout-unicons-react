import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAdobeAlt = (
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
    <path d="M10.247 2.403a1 1 0 0 0-.83-.444H1.992a1 1 0 0 0-1 1v18.082a1 1 0 0 0 1.925.38L10.342 3.34a1 1 0 0 0-.095-.936m-7.255 13.57V3.96h4.933Zm19-14.014h-7.518a1 1 0 0 0-.921 1.388l7.517 17.85a1 1 0 0 0 .921.612 1 1 0 0 0 .198-.02 1 1 0 0 0 .803-.98V2.959a1 1 0 0 0-1-1m-1 13.899L15.98 3.959h5.012ZM12.949 9.52a1 1 0 0 0-.926-.646h-.01a1 1 0 0 0-.928.627l-3.059 7.631a1 1 0 0 0 .929 1.372h2.254l1.522 2.99a1 1 0 0 0 .892.547h2.612a1 1 0 0 0 .936-1.353Zm1.287 10.521-1.523-2.99a1 1 0 0 0-.89-.547h-1.39l1.553-3.875 2.802 7.412Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgAdobeAlt)
export default ForwardRef
