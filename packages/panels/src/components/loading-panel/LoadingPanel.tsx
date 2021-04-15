import { Box, Space, Text } from "@stenajs-webui/core";
import { Spinner } from "@stenajs-webui/elements";
import * as React from "react";

export interface LoadingPanelProps {
  text?: string;
}

export const LoadingPanel: React.FC<LoadingPanelProps> = ({
  text = "Loading...",
}) => {
  return (
    <Box alignItems={"center"}>
      <Spinner size={"medium"} />
      <Space num={4} />
      <Text>{text}</Text>
    </Box>
  );
};
