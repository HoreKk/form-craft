import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { type } from "arktype";
import { Field } from "@chakra-ui/react";

export const Route = createFileRoute("/test-form")({
  component: DashboardComponent,
});

const userSchema = type({
  firstName: type.string.atLeastLength(8).configure({
    message: `Le prénom doit contenir au moins 8 caractères`,
  }),
  lastName: type.string.atLeastLength(12).configure({
    message: `Le prénom doit contenir au moins 12 caractères`,
  }),
  hobbies: type.string.array().atLeastLength(3).configure({
    message: `Vous devez renseigner au moins 3 hobbies`,
  }),
});

function DashboardComponent() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      hobbies: [""],
    } as typeof userSchema.infer,
    validators: {
      onSubmit: userSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <Box p={2}>
      <Text fontSize={18} mb={4}>
        Testing tanstack forms capabilities with arktype schema
      </Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <Flex flexDir="column" gap={4}>
          <form.Field
            name="firstName"
            children={(field) => {
              return (
                <Field.Root
                  required
                  invalid={
                    field.state.meta.isBlurred &&
                    field.state.meta.errors.length > 0
                  }
                >
                  <Field.Label>
                    Prénom
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    name={field.name}
                    value={field.state.value}
                    autoComplete="off"
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <Field.ErrorText>
                    {field.state.meta.errors[0]?.message}
                  </Field.ErrorText>
                </Field.Root>
              );
            }}
          />
          <form.Field
            name="lastName"
            children={(field) => {
              return (
                <Field.Root
                  required
                  invalid={
                    field.state.meta.isBlurred &&
                    field.state.meta.errors.length > 0
                  }
                >
                  <Field.Label>
                    Nom
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    name={field.name}
                    value={field.state.value}
                    autoComplete="off"
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <Field.ErrorText>
                    {field.state.meta.errors[0]?.message}
                  </Field.ErrorText>
                </Field.Root>
              );
            }}
          />
          <form.Field name="hobbies" mode="array">
            {(field) => {
              return (
                <Field.Root
                  required
                  invalid={field.state.meta.errors.length > 0}
                >
                  {field.state.value.map((_, i) => {
                    return (
                      <form.Field key={i} name={`hobbies[${i}]`}>
                        {(subField) => {
                          return (
                            <>
                              <Field.Label>
                                Hobby {i + 1}
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
                    );
                  })}
                  <button onClick={() => field.pushValue("")} type="button">
                    Add person
                  </button>
                  <Field.ErrorText>
                    {field.state.meta.errors[0]?.message}
                  </Field.ErrorText>
                </Field.Root>
              );
            }}
          </form.Field>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                w="fit-content"
                disabled={!canSubmit}
                loading={isSubmitting}
              >
                {isSubmitting ? "..." : "Valider"}
              </Button>
            )}
          />
        </Flex>
      </form>
    </Box>
  );
}
