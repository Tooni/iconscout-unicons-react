import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFolderExclamation = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M12.92 16.12a.8.8 0 0 0-.09-.18 2 2 0 0 0-.12-.15l-.15-.12-.18-.09a.6.6 0 0 0-.19-.06 1 1 0 0 0-.9.27l-.12.15a.8.8 0 0 0-.09.18.6.6 0 0 0-.06.18 1.4 1.4 0 0 0 0 .2 1 1 0 0 0 .08.38 1.2 1.2 0 0 0 .21.33 1 1 0 0 0 1.09.22 1.5 1.5 0 0 0 .33-.22 1.5 1.5 0 0 0 .22-.33 1 1 0 0 0 .05-.38 1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.08-.18M12 10.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m7-5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgFolderExclamation)
export default ForwardRef
