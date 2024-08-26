# iconscout-unicons-react

Making [Iconscout's Unicons](https://github.com/Iconscout/unicons) SVG sets available again, as React components, since the official sources aren't maintained anymore. TypeScript and ref-forwarding are supported.

Based on these:
* https://github.com/Iconscout/react-unicons
* https://github.com/Iconscout/react-unicons-monochrome
* https://github.com/Iconscout/react-unicons-solid
* https://github.com/Azuky/react-unicons/tree/master

## Use

Install with

`npm install @tooni/iconscout-unicons-react`

The library provides four entrypoints, corresponding to the styles of Unicons. The default is the 'line' style.

Import them like this:

```ts
// equivalent to `import {UilArrowCompressH} from "@tooni/iconscout-unicons-react/line"`
import {UilArrowCompressH} from "@tooni/iconscout-unicons-react"

import {UimAlignRightJustify} from "@tooni/iconscout-unicons-react/monochrome"
import {UisBriefcase} from "@tooni/iconscout-unicons-react/solid"
import {UitRocket} from "@tooni/iconscout-unicons-react/thinline"
```

A `size` and a `color` prop are exposed on the icons. Use them in React JSX or TSX like this:

```tsx
<div>
    Some Iconscout Unicons: <br/>
    <span>
        <UimAlignRightJustify size={48} color="green" />
        <UilArrowCompressH size={48} color="blue" />
        <UisBriefcase size={48} color="red" />
        <UitRocket size={48} color="brown" />
    </span>
</div>
```

It could look like this:

<img width="218" alt="Screenshot 2024-08-25 at 21 20 08" src="https://github.com/user-attachments/assets/7bdd75b1-c467-427b-a80d-67ddf90c468e">
