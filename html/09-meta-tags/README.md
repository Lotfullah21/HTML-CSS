# Search Engine Optimization (SEO):

The process of making improvements to website content, semantics and delivery to improve its ranking in search results.

When a search engine visits our website, it analyzes our HTML document and media elements.

## Meta Tags:

It defines meta data about a web page.

## Meta Data:

It is a data about another data, in this context, it is the data about the webpage.
These are added inside the head elements of our html document.

Meta element has two attributes, `name` and `content`.

`name`: It specifies the name of the meta data.

`content`: It specifies the value of the meta data.

### 1. Author Metadata:

It describes the author of the content.

### 2. Description Metadata:

It describes the content of the webpage.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta
			name="description"
			content="First Artificial intelligence algorithm." />
	</head>
	<body>
		<h1>Meta tags</h1>
	</body>
</html>
```

### 3. Viewport Metadata:

It helps web browsers to display websites at the appropriate scale on the device being used.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
	<body>
		<h1>Meta tags</h1>
	</body>
</html>
```

### 4. Language:

It specifies the language of the webpage to search engines.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta name="language" content="english" />
		<meta charset="UTF-8" />
	</head>
	<body>
		<h1>Meta tags</h1>
	</body>
</html>
```

### 5. Responsive design/mobile meta tags

It indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta name="language" content="english" />
		<meta name="format-detection" content="telephone=yes" />
		<meta name="HandheldFriendly" content="true" />
		<meta charset="UTF-8" />
	</head>
	<body>
		<h1>Meta tags</h1>
	</body>
</html>
```

### 6. <meta http-equiv="..."/> tags:

 <meta http-equiv="content-type" content="text/html"> specifies the format of the document returned by the server.

<meta http-equiv="default-style"/>  specifies the format of the styling document.

<meta http-equiv="refresh"/> specifies the duration of the page before it’s considered stale.

<meta http-equiv=”Content-language”/> specifies the language of the page.

## Note:

<meta http-equiv="Content-Language"/> is an HTTP header that influences how browsers and search engines interpret the language of the document, while <meta name="language" content="english"> is a meta tag that provides information about the language of the content within the page, but its usage might vary depending on how it's interpreted by different software.
