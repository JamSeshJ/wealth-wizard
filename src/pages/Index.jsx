import React, { useState, useEffect } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Select, Text, useToast, VStack } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";
import AssetsLiabilitiesChart from "../components/AssetsLiabilitiesChart";
import RevenueExpensesChart from "../components/RevenueExpensesChart";

const Index = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const [showCharts, setShowCharts] = useState(false);
  const toast = useToast();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Here you would handle the file upload process, including validation and sending to the backend
      toast({
        title: "File uploaded.",
        description: "Your file has been uploaded successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.xl">
      <Flex direction="column" my={10}>
        <Text fontSize="2xl" mb={5}>
          Financial Analysis Platform
        </Text>

        <Box p={5} shadow="md" borderWidth="1px">
          <VStack spacing={4} align="flex-start">
            <Text fontSize="xl">Client Dashboard</Text>
            <Select placeholder="Select bank" value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)}>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
            </Select>
            <Button onClick={() => setShowCharts(true)}>Run</Button>
            {showCharts && selectedBank && (
              <>
                <AssetsLiabilitiesChart bankId={selectedBank} />
                <RevenueExpensesChart bankId={selectedBank} />
              </>
            )}
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" mt={10}>
          <VStack spacing={4} align="flex-start">
            <Text fontSize="xl">Advisor Dashboard</Text>
            <FormControl>
              <FormLabel htmlFor="file-upload">Upload data (CSV)</FormLabel>
              <Flex alignItems="center">
                <Input type="file" id="file-upload" onChange={handleFileUpload} hidden />
                <Button leftIcon={<FaUpload />} onClick={() => document.getElementById("file-upload").click()}>
                  Upload File
                </Button>
              </Flex>
            </FormControl>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
