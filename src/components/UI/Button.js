import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color, removeProps, responsiveStyle } from 'styled-system'

const Component = ({ component: Component = 'button', primary, positive, negative, large, huge, borderColor, ...props}) => {
  const cleanProps = removeProps(props)
  return <Component {...cleanProps} />
}

const borderColor = props => color({ ...props, color: props.borderColor }).color

const Button = styled(Component)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  border: 1px solid ${borderColor};
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;

  &:focus {
    outline:0;
  }
`

export default styled(props => {

  let buttonProps = {
    p: 1,
    fontSize: 1,
    bg: 'bleech',
    color: 'pencil',
    borderColor: 'canvas--',
  }

  if(props.huge) {
      buttonProps.p = 3
  }

  if(props.large) {
      buttonProps.py = 1
      buttonProps.px = 2
      buttonProps.fontSize = 3
  }

  if(props.huge) {
      buttonProps.p = 2
      buttonProps.fontSize = 5
  }

  if(props.primary) {
    buttonProps.bg = 'ocean'
    buttonProps.color = 'bleech'
    buttonProps.borderColor = 'transparent'
  }

  if(props.positive) {
    buttonProps.bg = 'grass'
    buttonProps.color = 'bleech'
    buttonProps.borderColor = 'transparent'
  }

  if(props.negative) {
    buttonProps.bg = 'heart'
    buttonProps.color = 'bleech'
    buttonProps.borderColor = 'transparent'
  }

  if(props.disabled) {
    buttonProps.opacity = 0.5
  }

  return <Button { ...buttonProps } { ...props} />

})`

`
