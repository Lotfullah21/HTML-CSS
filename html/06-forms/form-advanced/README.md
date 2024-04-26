## Validation:

### 1. Client Side Validation:

Client-side validation checks for errors when the user writes the data into the form. The web browser does this by checking the typed data against the type of data that is specified when building the form like, `type=password` or `type=number` and provide to the user a feedback if the types of data does not matched.

more advanced version would if we add `required` attribute to each field or the ones we require their values so that the form should not be submitted unless the data is provided and also we can add `minlength` and `maxlength` attribute to ensure the correctness of the length of the input values;It can be used when validating the password or text fields.

Why client side validation? To save the web server resources.

### 2. Server Side Validation:

It happens once the data data is submitted to the form.

## Note:

The HTTP POST method is more secure than the HTTP GET method. When a form is submitted using the Post method, the form data is inserted into the content of the HTTP request instead of appended at the end of the URL as is done with the GET method.

# Input Types:

There are different input types and each server a specific purpose, one for password setup, another for name setup and so on.

One of the best practices is to use labels along the side the inputs, because it makes clearer for the user which input fields belongs to which label.

To relate the label and the field, use the same value for `id` attribute in an input field and `for` attribute in the label.

##### 1. Button:

We have `<button>` as well, here are some differences between the two.

1. `<input type="button">` cannot have more than one line of content or one content where as `<button>` can have nested element inside it.

2. `<input type="button"> ` It does not submit the form by default unless the functionality is added using JavaScript,but `<button>` submit the form without being explicitly mentioned if used inside the form.

```html
    <input type="password" id="pass" >
    <label for="pass">Light</label>
```

```html
<script>
	function handleClick() {
		// Submit the form
		document.getElementById("myForm").submit();
	}
</script>

<form id="myForm" method="get">
	<input type="button" value="Click me" onclick="handleClick()" />
</form>
```

```html
<form>
	<button type="submit">Submit Form</button>
</form>
```

`<input type="button">` does not have inherently css styles but `<button>` have some predefined styles which is supported by many browsers.

```html
<input type="button" id="button" value="Submit" />
```

##### 2. Radio:

It allows only one value to be submitted, but all radio buttons should have same in order to get under same category of options.

For instance, giving an option to the user which theme they want, we can use radio buttons.

```html
    <input type="radio" id="light" name="theme" value="Light">
    <label for="light">Light</label>
    <input type="radio" id="dark" name="theme" value="Dark">
    <label for="dark">Dark</label>
```

##### 3. Submit:

Displays a submit button to submit the values to the source that is specified in form's action attributed;Once clicked, the data will be submitted there.

```html
<label for="submit">submit</label> <input type="submit" value="" />
```

##### 4. Password:

Defines a text field whose value is hidden because of its nature being a secretive data.

```html
<label for="password">password</label> <input type="password" id="password" />
```

##### 5. Date:

It allows to enter a date where year, month and day is included.

```html
<label for="date">Date Of Birth</label>
<input type="date" name="date" id="date" />
```

##### 5. Datetime-local:

It allows to enter date and time as well.

```html
<label for="birthdaytime">Birthday (date and time):</label>
<input type="datetime-local" id="birthdaytime" name="birthdaytime" />
```

##### 6. Email:

It defines a field where the email can entered and the client side validation also will be done if the type is email.

```html
    <label for="email">Enter your email:</label>
    <input type="email" id="email" name="email">
```

##### 7. File:

It allows the user to select and upload a file.

```html
<label for="file">Select a file</label> <input type="file" name="" id="file" />
```

##### 8. Image:

It allows us to display an image.

```html
<label for="image">upload an image</label>
<input
	type="image"
	src="../../04-image/assets/hero.jpg"
	width="120"
	 height="130" />
```

##### 9. Week:

It allows to enter a week

```html
<label for="week">week</label>
<input type="week" name="week" id="week" />
<label for="week">week</label>
<input type="time" name="time" id="time" />
```

##### 10. Month:

اجازه وارد کردم ماه را برای استفاده کننده میدهد.

```html
<label for="month">month</label> <input type="month" name="month" id="month" />
```

##### 11 .Number:

It lets us to enter a number and using attributes such as min and max values we can specify number of values we are allowing to be entered.

```html
<input type="number" name="number" id="number" min="0" max="10" />
```

##### 12. Tel:

It allows us to enter a telephone number.

```html
<label for="tel">Enter your Telephone</label>
<input type="tel" name="tel" id="tel" pattern="[+]{93}[0-9]{11,15}" />
```

##### 13. Search:

Defines a text field for entering a search query.

```html
<label for="search">Search</label>
<input type="search" name="search" id="search" />
```

##### 14. URL:

It allows us to enter a url

```html
<label for="homepage">Add your homepage:</label>
<input type="url" id="homepage" name="homepage">
```

##### 14. Range:

It allows us to enter a choose a number in a range of two numbers.

```html
<label for="homepage">Add your homepage:</label>
<input type="url" id="homepage" name="homepage">
```

##### 14. Reset:

It allows to reset the from values to its default values.

```html
<label for="homepage">Add your homepage:</label>
<input type="url" id="homepage" name="homepage">
```

Name is the key when the form is submitted. the value inside each field is associated with the key(name).

<img src="./assets/input_diagram.png" alt="input fields">
