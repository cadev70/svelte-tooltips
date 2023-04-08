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

# Installation

```bash
yarn add @cadev70/svelte-tooltips
# or
npm i @cadev70/svelte-tooltips
```

# License

MIT

