import React from "react";
import { Box, Tabs, HStack, Text } from "native-base";
import General from "./General";
import Business from "./Business";
import Sports from "./Sports";

export default function TabComponent() {
  return (
    <Box width="100%" p={3} position="absolute" top={10}>
      <HStack px={5} py={3} alignItems="center" justifyContent="center">
        <Text fontSize={20} fontWeight="bold">
          What the News!
        </Text>
      </HStack>
      <Tabs isFitted align="center">
        <Tabs.Bar>
          <Tabs.Tab>General</Tabs.Tab>
          <Tabs.Tab>Business</Tabs.Tab>
          <Tabs.Tab>Sports</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views width="100%">
          <Tabs.View width="100%" px={0}>
            <General />
          </Tabs.View>
          <Tabs.View>
            <Business />
          </Tabs.View>
          <Tabs.View>
            <Sports />
          </Tabs.View>
        </Tabs.Views>
      </Tabs>
    </Box>
  );
}
