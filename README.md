“It can scarcely be denied that the supreme goal of all theory is to make the irreducible basic elements as simple and as few as possible without having to surrender the adequate representation of a single datum of experience.”
- Albert Einstein

# THIS IS A WORK IN PROGRESS.

# minimui

These are my hand-crafted minimalist React components that I use for various projects.

Use them at your discretion or build your own component library.

## Principles

- All interactive components should support "focus", "error", "disabled" and "in-progress" states.
- All interactive components should support keyboard navigation (tab), and keyboard activation where applicable (spacebar).
- All component states should be observable to color-blind people, i.e. no component state is primarily indicated by color.
- Colors are used as a secondary state indicators.
- In-progress state is used when a component has triggered an asynchronous action (e.g. a HTTP request).
- Components that are in a disabled or in-progress state do not emit events (e.g. onClick)
