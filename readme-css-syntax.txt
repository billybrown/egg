# CSS Class naming syntax
========================================



This site uses BEM Syntax for its naming methodology. 

BEM stands for:
	- Block
	- Element
	- Modifier

We use a combination of camelcase, single dashes and double dashes to
communicate if something is a Block, Element, or Modifier. It looks
like this:

.blockItem {}
.blockItem-element {}
.blockItem--modifier {}

Here is an example of markup using the "island" element. This element
is a modified island - indicated by the class, "island--featured"

<div class="island island--featured">
	<h2 class="island-title">I'm a title</h2>
	<div class="island-body">
		<p>I'm some body text.</p>
	</div>
</div>

The related SCSS might look like this:

.island {
	padding: 20px;
	background: white;
}

.island-title {
	font-size: 12px;
}

.island--featured {
	background: red;

	.island-title {
		font-size: 30px;
	}
}



# CSS Commenting syntax
========================================

- One empty line after each CSS declaration
- Four empty lines after each page title
- Three empty lines after each page section
- Two empty lines after each page section title
- one CSS declaraction per line (except for rare, special circumstances)
- one CSS element per line (except for rare, special circumstances)
- one new line at the end of the file

This is at the top of a css file to explain what it is:

/////////////////////////////////////-+++-/////////////////////////////////////////
// CSS Object name
// Description of CSS Object
/////////////////////////////////////-+++-/////////////////////////////////////////


This is a section header inside of the same css file:

/////////////////////////////////////-+++-
// Section title and description


This is a basic comment about some css:

// Description of what the following selector does
// reference link


This is when you need to note a specfific declaration:

.exampleClass {
	margin: 10px !important; // description of why it is this
}
