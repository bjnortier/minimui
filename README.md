"Everything should be made as simple as possible, but not simpler."
- Einstein (paraphrased)

# THIS IS A WORK IN PROGRESS.

# minimui

These are my minimalist React components that I use for various projects.

Use them at your discretion or use this as a base to build your own component library.

## Motivation

- Lack of keyboard navigation support and focus indication.
- Lack of "in progress" state support. Native components are not designed with asynchronous actions in mind (e.g. when triggering a XHR).
- Lack of "error" state support in native components.

## Principles

- Use native components where possible, as this is necessary to avoid problems that lie outside the browser's control. For example, using a <select> with options that extend "under" the bottom of the browser window is problematic, whereas using a native control will cater for this situation.
- All interactive components should support "focus", "error", "disabled" and "inProgress" states.
- All interactive components should support keyboard navigation (tab), and keyboard activation where applicable (spacebar).
- All component states should be observable to color-blind people and if the screen is set to grayscale, i.e. no component state is *primarily* indicated by color, but colors are used as a supplementary state indicators.
- "inProgress" state is used when a component has triggered an asynchronous action (e.g. a XHR).
- Components that are in a disabled or in-progress state do not emit events (e.g. onClick)

## Dependencies

- React
- Font Awesome
- Styled-Components
