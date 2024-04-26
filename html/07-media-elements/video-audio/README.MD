# 1. Video:

For each media elements, we are having different tags to embed them in the web.
For instance, to embed the video, we use `<videos>` and nested in `<video>`, `<source>` will be added.

For `<source>`, we need to have two attributes, which are `src` (the video destination) and `type` (media type like mp4).
Some of the most common media types that are supported by most of the browsers are `.mp4, .webm, .ogg`.

```html
<body>
	<h4>
		Debuggers Explained Clearly by
		<a href="https://github.com/colevandersWands" target="_blank">Evan</a>
	</h4>

	<video loop controls width="840">
		<source src="./assets/guide.mp4" type="video/mp4" />
	</video>
</body>
```

# 2. Audio:

For audio, the most common media types that are supported by most web browsers are `.mp4, .ogg, .wav`
