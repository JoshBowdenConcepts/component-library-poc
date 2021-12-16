import React from 'react'
import styled from 'styled-components'
const theme = require('../base.theme.json')
    .then((theme: any) => {
        // blah
    })
    .catch((error: Error) => {
        console.log(error)
    })

console.log(theme)

// How I came up with Typescript Example for Button https://stackoverflow.com/questions/57424821/typescript-extend-react-component-props-for-styled-component-element

const StyledButton = styled.button`
    color: red;
`

// This can now use all inate button props which is really nice we don't need to specify anymore
interface Props extends React.ComponentPropsWithoutRef<'button'> {
    theme?: string
    id: string // overwriting a item like this makes it required when it was not-required we can do this for aria labels and such
}

export const Button = (props: Props) => {
    return <StyledButton {...props} />
}
