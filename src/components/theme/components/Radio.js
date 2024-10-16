import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(radioAnatomy.keys);

// define the base components styles
const baseStyle = definePartsStyle({
    // define the part you're going to style
    control: {
        borderRadius: "50%", // change the border radius
        borderColor: "orange.600" // change the border color
    }
});

const sizes = {
    // define custom styles for xl size
    xl: definePartsStyle({
        control: { w: "6", h: "6" },
        label: { fontSize: "xl" }
    })
};

// export the components theme
export const radioTheme = defineMultiStyleConfig({
    baseStyle,
    sizes,
});