import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18.223 14.278q-.062.09-.136.17l-.004.004a6.4 6.4 0 0 1-.798.796c-2.03 1.876-5.37 4.109-5.81 3.764-.383-.299.63-1.764-.54-2.007l-.243-.031h-.002c-3.437-.489-6.047-2.893-6.047-5.785 0-3.245 3.285-5.876 7.338-5.876s7.337 2.63 7.337 5.876a5.02 5.02 0 0 1-1.095 3.089"
      className="line_svg__uim-tertiary"
    />
    <path
      d="M17.907 2H6.093A4.093 4.093 0 0 0 2 6.093v11.814A4.093 4.093 0 0 0 6.093 22h11.814A4.093 4.093 0 0 0 22 17.907V6.093A4.093 4.093 0 0 0 17.907 2m.316 12.278a2 2 0 0 1-.136.17l-.004.004a6.4 6.4 0 0 1-.798.796c-2.03 1.876-5.37 4.109-5.81 3.764-.383-.299.631-1.764-.54-2.007l-.243-.031h-.002c-3.437-.489-6.047-2.893-6.047-5.785 0-3.245 3.285-5.876 7.338-5.876s7.337 2.63 7.337 5.876a5.02 5.02 0 0 1-1.095 3.089"
      className="line_svg__uim-primary"
    />
    <path
      d="M9.203 12.265H8.138V9.842a.384.384 0 0 0-.383-.383h-.032a.384.384 0 0 0-.382.383v2.838c0 .211.171.382.382.383h1.48a.384.384 0 0 0 .383-.383v-.032a.384.384 0 0 0-.383-.383m4.572-2.806h-.032a.384.384 0 0 0-.382.383v1.666l-1.383-1.855a.38.38 0 0 0-.333-.194h-.032a.384.384 0 0 0-.382.383v2.838c0 .211.171.382.382.383h.032a.384.384 0 0 0 .383-.383v-1.697l1.393 1.903.028.038a.3.3 0 0 0 .15.11.4.4 0 0 0 .144.029h.032a.4.4 0 0 0 .18-.045.3.3 0 0 0 .092-.07.38.38 0 0 0 .111-.268V9.842a.384.384 0 0 0-.383-.383m-3.498 0h.032c.212 0 .383.171.383.383v2.838a.383.383 0 0 1-.383.383h-.032a.383.383 0 0 1-.382-.383V9.842c0-.212.17-.383.382-.383m6.234.007h-1.48a.384.384 0 0 0-.383.383v2.838c0 .21.172.382.383.382h1.48a.384.384 0 0 0 .382-.382v-.032a.384.384 0 0 0-.382-.383h-1.066v-.606h1.066a.384.384 0 0 0 .382-.382v-.032a.384.384 0 0 0-.382-.383h-1.066v-.606h1.066a.384.384 0 0 0 .382-.383v-.03a.384.384 0 0 0-.382-.383z"
      className="line_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLine)
export default ForwardRef
