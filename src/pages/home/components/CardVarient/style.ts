import { styled } from "@stitches/react";

export const CardContainer = styled("div", {
    minWidth: "20rem",
    display: "flex",
    alignItems: "center",

    gap: "$5",
    padding: "$6",

    borderRadius: "$md",
    background: "$gray700",

    cursor: "pointer",
    border: "2px solid $gray700",

    img: {
        width: "4rem",
        height: "5.875rem",
    },

    "&:hover": {
        border: "2px solid $gray500",
        background: "$gray600",
    }
})

export const Main = styled("main", {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: "$8",

    ".infoBook": {
        strong: {
            fontSize: "$md",
            fontWeight: "$bold",
            lineHeight: "$short",
            color: "$gray100"
        },

        span: {
            display: "block",
            fontSize: "$sm",
            fontWeight: "$regular",
            lineHeight: "$base",
            color: "$gray400"
        }
    },
})