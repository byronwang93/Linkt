import "./App.css";
import { Box, Button, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box w="381px" h="522px" backgroundColor="blue">
      <Text>Click on a link to copy it to your clipboard! :')</Text>
      <Button>Manage my links</Button>
    </Box>
  );
}

export default App;
