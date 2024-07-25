## Form:

The `<form>` element is used to create a form on a web page.
forms are used to collect information from the user, such as text, radio buttons, checkboxes ,and more.

| Element/Attribute       | Description                                                                                                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<form>`                | This is the opening tag of the form element, which defines the start of the form.                                                                                                   |
| `action`                | This attribute specifies the URL or the path that the form should submit request to, if not specified, the data will be submitted to the same path as the current web page address. |
| `method`                | This attribute specifies the HTTP method used to submit the form data. Common values are "post", used to post data to the server and "get" which retrieves data from the server.    |
| `<label>`               | This element is used to create a label for an input field.                                                                                                                          |
| `for`                   | This attribute specifies which input field the label is associated with, using the ID of the input field.                                                                           |
| `<input>`               | This element is used to create input fields within the form.                                                                                                                        |
| `type`                  | This attribute specifies the type of input field. Examples include "text" for text input, "password" for password input, "checkbox" for checkboxes, etc.                            |
| `id`                    | This attribute uniquely identifies the input field.                                                                                                                                 |
| `name`                  | This attribute specifies the name of the input field. This name is used to identify the input field when the form is submitted.                                                     |
| `required`              | This attribute specifies that the input field is required and must be filled out before the form can be submitted.                                                                  |
| `<input type="submit">` | This element creates a submit button that users can click to submit the form data.                                                                                                  |

#### name:

it acts as identifier of a field in a form, for instance if we want to manipulate a form element, we will reference its name.
in forms, if the user have choices, it is crucial to have same name for the same category of data points.

### value:

it is the initial value that will be submitted to the server.

## few good extension to have.

1. prettier
2. highlights Matching
3. indent rainbow

### id:

To connect your label and the form attribute, the `id` and `for` attribute should have same value.

```html
<label for="forEmail">email</label>
<br />
<input type="email" id="forEmail" placeholder="email" />
```

It can be observed that the for the `id` and `for` attribute are having same value.

### `<radio>`

To have a proper radio buttons, the name value for all input fields should be the same.
Same goes for checkbox input fields.

### `<fieldset>`

Used to group related input elements in a form. For instance, elements related to the courses and fees can be grouped separately in two field sets.

### aria-required:

Used for HTML elements that do not have input validation like `div`.

```html
<div aria-required="true">Please enter your email address:</div>
```

### min and max:

Determine the minimum and maximum values allowed for an input field. They are usually applied to numerical text inputs, range inputs or dates.

```html
<input type="number" id="courses" name="courses" min="1" max="5" />

<input type="range" id="speed" name="speed" min="1" max="100" />
```

Multiple
Indicates that the user can enter more than one value in a single input field.
This attribute can only be used for email and file input types.

`html<input type="file" id="images" name="images" multiple />`

`<input type="file" />`: This creates a file input field, allowing users to
browse and select files from their device.
`id="images"`: and name=`images`:
These attributes provide identifiers for the input field, making it easier to
reference in CSS and JavaScript, and they specify the name that will be used
when submitting the form data.
`multiple`: When this attribute is included, it
allows users to select multiple files at once. Without it, users can typically
only select one file at a time.
`Required`: Denotes a mandatory input that the user can’t leave empty.
It can be used with any input type, like password,radio, text and so on.

`<input type="text" id="firstName" name="firstName" required />`

# Form Submission

```http
<form method="get">
</form>
```

A web browser communicates with the server using a http request-response cycle.
The web browser sends the request and a web server sends the response.

Forms data can be submitted via two methods as part of a request, `http get method` and http `post method`.

The form will default to the HTTP GET method when the method attribute is not provided.

## http post

Here, the form data is inserted into the content of the HTTP request

## http get

Here, the form data is appended at the end of url.

Using the above methods, there are some short comings:

- URL length by browsers (up to 2000 chars)
- URL length by web server
- Security threats, the data can be read by third parties.

The absolute path, which starts with a forward slash, will use the base address of the current website, such as https://meta.com and combine it with the absolute path. For example, if /login is the absolute path, the form will be submitted to https://meta.com/login. If the address is https://meta.com/company-info/ and /login is the absolute path, the submission address will still be https://meta.com/login.

Similarly, a relative path will combine the current web address with a relative path. For example, if the web browser is currently on the web page https://meta.com/company-info/, and the relative path is set to login, the form will be submitted to https://meta.com/company-info/login.
