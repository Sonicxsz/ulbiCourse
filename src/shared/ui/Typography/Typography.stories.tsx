import { ComponentMeta, ComponentStory } from "@storybook/react"

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { Typography, TypographyVariant } from "./Typography"

export default {
  title: "shared/Typography",
  component: Typography,  
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />



export const LightTheme = Template.bind({})
LightTheme.args = {
  children: "Text",
  variant: TypographyVariant.TEXT,
}


export const DarkTheme = Template.bind({})
DarkTheme.args = {
  children: "Text",
  variant: TypographyVariant.TEXT,
}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]
