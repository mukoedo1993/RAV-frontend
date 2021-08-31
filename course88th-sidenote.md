Hi!

`onClick={props.nameClickHandler(props.username)}`

... will be executed immediately.

But ...

`onClick={() => props.nameClickHandler(props.username)}`

... is the definition of an anonymous function, which will be executed on button click.

Jost
