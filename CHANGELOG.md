# 2.0.0 (2014-10-13)

## Features

- Refactoring of plugin code to adhere to latest jQuery development practices
  - Wrapping code in a Immediately Invoked Function Expression to protect the $ alias / add scope
  - Adding default options for speed and an offset from the anchor to apply; applying an offset will suppress the
  addition of a hash to the URL
  - Moving example HTML into its own directory
  - Moving plugin file into root of project
  
## Breaking Changes

- This update removes the explicit call to `$('.selector').anchorAnimate();` in the plugin code; you must
now invoke this method manually. Allows you to override the default settings as desired.