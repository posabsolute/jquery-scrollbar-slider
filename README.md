# jQuery Scrollbar Slider

HTML anchor links can be a useful tool to link to a location in a very long page. However, the default implementation
of HTML anchor links are not intuitive. When a user clicks on a link, they expect to go to another page. Instead, an
clicking on an HTML anchor link makes a jarring jump down the page.

This jQuery plugin eases the pain of that interaction by smoothly scrolling down the page to reach the anchor
destination.

## Installation via Bower

```
bower install --save jquery-scrollbar-slider
```

## Options

Name          | Type | Default | Description
------------- | ---- | ------- | -----------
speed | int | 1100 | How fast in milliseconds to scroll down to the anchor
offset | int | 0 | Setting this to a non-zero value will adjust where the scrolling will stop relative to the actual anchor position. It has the side effect of not placing the `#id` into the URL due to standard browser behavior forcing the page to always be at the anchor location defined by the hash in the URL. 

## Sample Use

You can see full HTML examples in action in the `examples` folder of this project. The basic approach is to

### Basic

```
<html>
  <head>
    <script src="https://code.jquery.com/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="jquery.anchor.js" type="text/javascript"></script>
  </head>
  
  <body>

    <div><a href="#anchorTarget" class="anchorLink">Click Me!</a>
    <div>Much content might be between me and the anchor...</div>
    <div><a id="anchorTarget"></a></div>

    <script type="text/javascript">
      $(document).ready(function() {
        $("a.anchorLink").anchorAnimate();
      });
    </script>

  </body>
</html>
```

### Overriding the Defaults

```
<html>
  <head>
    <script src="https://code.jquery.com/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="jquery.anchor.js" type="text/javascript"></script>
  </head>
  
  <body>

    <div><a href="#anchorTarget" class="anchorLink">Click Me!</a>
    <div>Much content might be between me and the anchor...</div>
    <div><a id="anchorTarget"></a></div>

    <script type="text/javascript">
      /** Do not have to wrap these in document.ready() */
      $.fn.anchorAnimate.defaults.speed = 50;
      $.fn.anchorAnimate.defaults.offset = 50;

      $(document).ready(function() {
        $("a.anchorLink").anchorAnimate();
      });
    </script>

  </body>
</html>
```

## Licence

Copyright (c) 2012 Cedric Dugas, http://www.position-absolute.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.