import { CloseButton, Flex, Icon, Input, InputGroup } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";
import { useRef, useState } from "react";

const FormBuilderSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const endElement = searchTerm ? (
    <CloseButton
      size="xs"
      variant="plain"
      onClick={() => {
        setSearchTerm("");
        inputRef.current?.focus();
      }}
      me="-2"
    />
  ) : undefined;

  return (
    <Flex flexDir="column" gap={4}>
      <InputGroup
        startElement={
          <Icon>
            <RiSearch2Line />
          </Icon>
        }
        endElement={endElement}
      >
        <Input
          ref={inputRef}
          placeholder="Rechercher"
          outlineColor="gray.50"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.currentTarget.value);
          }}
        />
      </InputGroup>
      <ul>
        <li>Text Input</li>
        <li>Checkbox</li>
        <li>Radio Button</li>
        <li>Dropdown</li>
        <li>Button</li>
      </ul>
    </Flex>
  );
};

export default FormBuilderSidebar;
