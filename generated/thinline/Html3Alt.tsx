import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHtml3Alt = (
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
    <path d="M20.87 2.162A.5.5 0 0 0 20.5 2h-17a.5.5 0 0 0-.498.544l1.5 17a.5.5 0 0 0 .36.437l6.99 2a.5.5 0 0 0 .275 0l7.01-2a.5.5 0 0 0 .361-.437l1.5-17a.5.5 0 0 0-.129-.382m-2.338 16.951L11.99 20.98l-6.522-1.866L4.046 3h15.908zM7.96 7.5h7.534l-.266 3H10a.5.5 0 0 0 0 1h5.139l-.345 3.883-2.794.635-2.794-.635-.128-1.428a.513.513 0 0 0-.543-.453.5.5 0 0 0-.453.543l.16 1.79a.5.5 0 0 0 .388.442l3.26.74a.5.5 0 0 0 .22 0l3.26-.74a.5.5 0 0 0 .388-.443l.426-4.803c0-.01.006-.02.006-.031l-.002-.012.35-3.944a.5.5 0 0 0-.498-.544H7.96a.5.5 0 1 0 0 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgHtml3Alt)
export default ForwardRef
