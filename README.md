#### `.brand` and `ul` inside the `nav` **and** `nav` inside `header`
```jade
header
	nav
		h1.brand
			a Name
		ul
			li
				a Home
			li
				a About
```

#### `.brand` inside `header` directly **and** `ul` inside `nav`, inside `header`

if we have this:
```jade
header
	h1.brand
		a Name
	nav
		ul
			li
				a Home
			li
				a About

```

then
do we need this:?
```jade
header
	h1.brand.full-line
		a Name
	nav
		ul
			li
				a Home
			li
				a About

```