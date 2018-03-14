# Pure CSS accordion - static & AJAX
## Static
- BEM methodology was applied in some of the classes in HTML
- Supports IE10+, latest Chrome and latest Firefox
- Flexbox is not supported in IE9, therefore the cards are aligned as accordion both desktop and mobile
- Flexbox SASS Mixins taken from https://gist.github.com/richardtorres314/26b18e12958ba418bb37993fdcbfc1bd

## With AJAX
- Needs to run on a server, f.e. Apache
- My goal was to use pure JS, but since the syntax is not supported by IE9 and I did not want to apply hacks, I am using JQuery.
- Each card is fetched once
- More details in the comments inside the JS file
