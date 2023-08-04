import { StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";

const GeneralButton = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outLinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outLinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;
    const fontSize = props.fontSize;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style
            }}

            onPress={props.onPress}
        >
            <Text
                style={{
                    fontSize: fontSize,
                    ...{ color: textColor }
                }}
            >{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: "center"
    }
})

export default GeneralButton;