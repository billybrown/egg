# CSS class naming conventions
========================================


SUIT CSS relies on structured class names and meaningful hyphens (i.e., not using hyphens merely to separate words). This helps to work around the current limits of applying CSS to the DOM (i.e., the lack of style encapsulation), and to better communicate the relationships between classes.

Please visit the official documentation for SUIT here:
https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md



# CSS general conventions
========================================


- one CSS declaraction per line (except for rare, special circumstances)
- one empty line after each CSS declaration
- one CSS element per line (except for rare, special circumstances)
- one new line at the end of the file



# CSS commenting conventions
========================================


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
