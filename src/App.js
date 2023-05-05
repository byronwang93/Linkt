import "./App.css";
import { Box, Button, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box className="container" p="0" m="0" w="381px" h="522px">
      <Text>Click on a link to copy it to your clipboard! :')</Text>
      <Button>Manage my links</Button>
    </Box>
  );
}

export default App;
