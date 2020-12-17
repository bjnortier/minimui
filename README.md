[![Build Status](https://travis-ci.org/bjnortier/minimui.png?branch=master)](https://travis-ci.org/bjnortier/minimui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# THIS IS A WORK IN PROGRESS

# minimui

Minimui is my minimalist React component library that I use for various projects.

YMMV.

I have developed this React component library to standardise form components, create custom components, support standardised states, and do this all in a visually attractive way.

## Principles

- Native components SHOULD be used where possible, as this is necessary to avoid problems that lie outside the browser canvas. For example, using a ```<select>``` with options that overflow over the bottom of the browser window is problematic as they will not be displayed, whereas a native control will render the options upwards and viewable.
- All form components MUST support "focus", "error", "disabled" and "in-progress" states.
- All form components MUST support keyboard navigation (tab), and keyboard activation where applicable (spacebar).
- All component states MUST be observable to colour-blind people and when rendering is grayscale, i.e. no component state is *primarily* indicated by colour, but colours are used as a secondary aesthetic state indicators.
- All form components MUST support "in-progress" state when an asynchronous action has been triggered (e.g. an XHR).
- Components that are in a "disabled" or "in-progress" state MUST NOT emit events (e.g. onClick).
- All form components MUST be [controlled components](https://reactjs.org/docs/uncontrolled-components.html).

## Dependencies

- react 16.x
- font-awesome 5.x
- styled-components 4.x
