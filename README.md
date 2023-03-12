# svelte-tooltips

A svelte tooltips using action wrapper.

# How to use

Basic:

```svelte
<script>
  import { tooltip } from "@cadev70/svelte-tooltips"
</script>

<button use:tooltip={{ content: "Tips Content!",}}>Button</button>
```

More options:

```svelte
<script>
  import { tooltip } from "@cadev70/svelte-tooltips"
</script>

<button
  use:tooltip={{
    content: "Tips Content!",
    disabled: false,
    offset: 8,
    placement: 'top',
    showArrow: true
  }}>
  Button
</button>
```

# Installation

```bash
yarn add @cadev70/svelte-tooltips
# or
npm i @cadev70/svelte-tooltips
```

# License

MIT

