import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDocumentInfo = (
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
    <path d="M12 14a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m.38-2.92a1 1 0 0 0-.58-.08l-.18.06-.18.09-.15.12A1 1 0 0 0 11 12a1 1 0 0 0 .29.71 1 1 0 0 0 .33.21.84.84 0 0 0 .38.08 1 1 0 0 0 .71-.29A1 1 0 0 0 13 12a1 1 0 0 0-.29-.71 1.2 1.2 0 0 0-.33-.21M20 8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.1a1.1 1.1 0 0 0-.31-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94m-6-3.53L16.59 8H15a1 1 0 0 1-1-1ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentInfo)
export default ForwardRef
