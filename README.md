# svelte-tooltips

A svelte tooltips using action wrapper.

# How to use

Basic:

```svelte
<script>
  import { tooltip } from "@cadev70/svelte-tooltips"
</script>

<button use:tooltip={{ content: "Tips Content!"}}>Button</button>
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

Set global options.

- *Call `setConfig()` before `use:tooltip`*
- *`onMount()` is not a good place to call `setConfig()`*


```svelte
<script lang="ts">
  import { setConfig, tooltip } from '@cadev70/svelte-tooltips';

  setConfig({
    offset: 0,
    placement: 'bottom',
    showArrow: false
  });
</script>
...
<button use:tooltip={{ content: "Tips Content!" }}>Button</button>
...

```

# Styling 

Override following CSS variables to apply custom styles. 

```css
<style>
  :root {
    --s3-tooltip-background-color: #333333;
    --s3-tooltip-border-radius: 4px;
    --s3-tooltip-color: white;
    --s3-tooltip-font-size: 13px;
    --s3-tooltip-padding: 4px 8px;
    --s3-tooltip-arrow-size: 8px;
    --s3-tooltip-arrow-position-offset: -4px;
  }
</style>

```

# Installation

```bash
yarn add @cadev70/svelte-tooltips
# or
npm i @cadev70/svelte-tooltips
```

# License

MIT

