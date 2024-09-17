import { ReactNode } from "react";
import { StyledContainer } from "./styles";

interface IGiantParagraphProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
}

export function GiantParagraph({ children, ...rest }: IGiantParagraphProps) {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
}
