import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { Input, InputTheme } from "./Input"

export default {
  title: "shared/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />


export const Normal = Template.bind({})
Normal.args = {
  placeholder: "placeholder",
  theme: InputTheme.NORMAL,
}

export const Black = Template.bind({})
Black.args = {
  placeholder: "placeholder",
  theme: InputTheme.BLACK,
}


