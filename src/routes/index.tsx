import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { type } from "arktype";
import { Field } from "@chakra-ui/react";
import FormBuilderSidebar from "@/components/form-builder/sidebar";

export const Route = createFileRoute("/")({
  component: DashboardComponent,
});

const formSchema = type({
  fields: type({ name: type.string, slug: type.string }).array(),
});

function DashboardComponent() {
  const form = useForm({
    defaultValues: {
      fields: [{ name: "test", slug: "text" }],
    } as typeof formSchema.infer,
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <Box
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <Flex alignItems="center" mb={4}>
        <Text fontSize={26} fontWeight={800} mr="auto">
          Mon Formulaire
        </Text>
        <ButtonGroup gap={3}>
          <Button
            w="fit-content"
            colorPalette="gray"
            colorScheme="dark"
            variant="outline"
          >
            Aperçu
          </Button>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                w="fit-content"
                colorPalette="gray"
                disabled={!canSubmit}
                loading={isSubmitting}
              >
                {isSubmitting ? "..." : "Enregistrer"}
              </Button>
            )}
          />
        </ButtonGroup>
      </Flex>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem
          colSpan={2}
          p={4}
          backgroundColor="white"
          borderRadius="md"
          boxShadow="xs"
          border="1px solid"
          borderColor="gray.100"
        >
          <FormBuilderSidebar />
        </GridItem>
        <GridItem
          colSpan={10}
          p={4}
          backgroundColor="white"
          borderRadius="md"
          boxShadow="xs"
          border="2px solid"
          borderStyle="dashed"
          borderColor="gray.100"
        >
          <Flex flexDir="column" gap={4}>
            <form.Field name="fields" mode="array">
              {(field) => {
                return (
                  <Field.Root
                    required
                    invalid={field.state.meta.errors.length > 0}
                  >
                    {field.state.value.map((_, i) => {
                      return (
                        <Flex flexDir="column" gap={2} key={i}>
                          <form.Field name={`fields[${i}].name`}>
                            {(subField) => {
                              return (
                                <>
                                  <Field.Label>
                                    Name
                                    <Field.RequiredIndicator />
                                  </Field.Label>
                                  <Input
                                    name={subField.name}
                                    value={subField.state.value}
                                    autoComplete="off"
                                    onBlur={subField.handleBlur}
                                    onChange={(e) =>
                                      subField.handleChange(e.target.value)
                                    }
                                  />
                                </>
                              );
                            }}
                          </form.Field>
                          <form.Field name={`fields[${i}].slug`}>
                            {(subField) => {
                              return (
                                <>
                                  <Field.Label>
                                    Slug
                                    <Field.RequiredIndicator />
                                  </Field.Label>
                                  <Input
                                    name={subField.name}
                                    value={subField.state.value}
                                    autoComplete="off"
                                    onBlur={subField.handleBlur}
                                    onChange={(e) =>
                                      subField.handleChange(e.target.value)
                                    }
                                  />
                                </>
                              );
                            }}
                          </form.Field>
                        </Flex>
                      );
                    })}
                    <Field.ErrorText>
                      {field.state.meta.errors[0]?.message}
                    </Field.ErrorText>
                  </Field.Root>
                );
              }}
            </form.Field>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
