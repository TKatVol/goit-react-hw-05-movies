import { Box, StyledPoster, Message } from "../ErrorMessage/ErrorMessage.styled";
import defaultImage from "../../images/defaultImage.jpg";

export const ErrorMessage = ({message}) => {
    return (
        <Box>
            <StyledPoster src={defaultImage} alt="movie card" width="240" height="340" />
            <Message>{message}</Message>
        </Box>
    );
};