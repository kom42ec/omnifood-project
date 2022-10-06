# Omnifood Project // In Progress

Omnifood is a food app that uses AI to create and deliver custom healthy meal plans. The goal is to design and build a landing page for the service. This is the final project from the Udemy course ["Build Responsive Real-World Websites with HTML and CSS"](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/) created by Jonas Schmedtmann.

Here I am not gonna follow the course and build the exact same website as the instructor. I will come up with my own design and try to build it with the skills I currently posess.

## Table of content

- [Overview](#overview)
- [User stories](#user-stories)
- [Screenshots](#screenshots)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Suggestions](#suggestions)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Overview

## User stories

## Screenshots

## Links

- Old design: [Omnifood-Old](https://omnifood-kom42ec.netlify.app/)
- New design: [Omnifood-New](https://kom42ec.github.io/omnifood-project/)

## Built with

- Semantic HTML5 markup
- CSS3
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- JavaScript

## What I learned

1. Trick to add a border inside a button element without using the border property.

```
.btn {
   box-shadow: inset 0 0 0 3px #fff; }
 }
```

2. How to apply the same grayish color to different logo images without editing images in Photoshop.

```
.logos img {
    filter: brightness(0); <--- Make logos completely black
    opacity: 50%; <--- Make logos translucent so they appear grayish
}
```

3. How to create a border radius on a card when there is an image on top, without adding the border-radius property on the image.

```
.card {
  border-radius: 11px;
  overflow: hidden; <--- This is the trick
}
```

4. Using the _currentColor_ variable to set the border-color value.

```
.link:link, .link:visited {
  color: #22c55e;
  border-bottom: 1px solid currentColor;
}
```

5. Scale the image on hover without overflowing the container.

```
.gallery-item { overflow: hidden; <--- no overflow}
.gallery-item img:hover { transform: scale(1.1); }
```

6. When adding a background image in CSS we should indicate that in HTML as well. We do that with _role_ & _aria-label_ attributes, like this:

```
<div class="image-box" role="img" aria-label="image label"></div>
```

7. How to change a focus state for all elements.

```
*:focus {
  outline: none;
  box-shadow: 0 0 0 5px rgba(167, 232, 191, 0.6);
}
```

## Continued development

- **_Meals section:_** Create more meals and make each diet a button. When a user clicks on a diet he gets the meals that are associated with the chosen diet.

## Suggestions

## Useful resources

## Author

- Twitter - [@kom42ec](https://twitter.com/kom42ec)

## Acknowledgements

```

```
