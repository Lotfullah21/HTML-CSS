The above radio button could be structured like this as well.

```html
<div>
	<h2>Programming Languages</h2>
	<label>
		<input type="radio" name="programming" value="python" checked /> Python
	</label>
	<label> <input type="radio" name="programming" value="java" /> Java </label>
	<label> <input type="radio" name="programming" value="c++" /> C++ </label>
</div>

<div>
	<h2>Machine Learning Topics</h2>
	<label>
		<input type="radio" name="ml" value="deep-learning" checked /> Deep Learning
	</label>
	<label>
		<input type="radio" name="ml" value="machine-learning" /> Machine Learning
	</label>
	<label>
		<input type="radio" name="ml" value="generative-models" /> Generative Models
	</label>
</div>
```

But this one is more readable and semantically makes more sense.

```html
<fieldset>
	<legend>Programming Languages</legend>
	<label>
		<input type="radio" name="programming" value="python" checked />
		Python
	</label>
	<label> <input type="radio" name="programming" value="java" /> Java </label>
	<label> <input type="radio" name="programming" value="c++" /> C++ </label>
</fieldset>

<fieldset>
	<legend>Machine Learning Topics</legend>
	<label>
		<input type="radio" name="ml" value="deep-learning" checked /> Deep Learning
	</label>
	<label>
		<input type="radio" name="ml" value="machine-learning" /> Machine Learning
	</label>
	<label>
		<input type="radio" name="ml" value="generative-models" />
		Generative Models
	</label>
</fieldset>
```

#### datalist:

When number of options increases, it is difficult to navigate through all options, instead `datalist` tag can be used to search for the match in the input field and the items in `datalist`.
To make the connection, the `list` attribute value in the input field should match with the list `id` attribute value in the datalist and the `id` in the input should not match with `list` value present in the input.

```html
<input id="courses" name="courses" list="courses_opt" />
<datalist id="courses_opt"></datalist>
```

After adding the above changes,

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>form</title>
		<link rel="stylesheet" href="./style.css" />
	</head>
	<body>
		<main>
			<form action="" method="">
				<div>
					<label for="courses">courses</label>
					<input id="courses" name="courses" list="courses_opt" />
					<datalist id="courses_opt">
						<option value="Machine learning"></option>
						<option value="Deep learning"></option>
						<option value="Generative Models"></option>
						<option value="Python"></option>
					</datalist>
				</div>
				<fieldset>
					<legend>Programming Languages</legend>
					<label>
						<input type="radio" name="programming" value="python" checked />
						Python
					</label>
					<label>
						<input type="radio" name="programming" value="java" /> Java
					</label>
					<label>
						<input type="radio" name="programming" value="c++" /> C++
					</label>
				</fieldset>

				<fieldset>
					<legend>Machine Learning Topics</legend>
					<label>
						<input type="radio" name="ml" value="deep-learning" checked /> Deep
						Learning
					</label>
					<label>
						<input type="radio" name="ml" value="machine-learning" /> Machine
						Learning
					</label>
					<label>
						<input type="radio" name="ml" value="generative-models" />
						Generative Models
					</label>
				</fieldset>

				<p>Please select the course you want to start first</p>
				<!-- select options -->
				<label for="topic">Select a Topic:</label>
				<select id="topic" name="topic">
					<option value="python">Python</option>
					<option value="deep-learning">Deep Learning</option>
					<option value="machine-learning" selected>Machine Learning</option>
					<option value="web-development">Web Development</option>
					<option value="data-structures">Data Structures</option>
				</select>
				<br />
				<button type="submit">Submit</button>
			</form>
		</main>
	</body>
</html>
```
