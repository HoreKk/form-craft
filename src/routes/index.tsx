import { Box } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Accueil" }],
  }),
});

function Home() {
  return (
    <Box>
      <h3>Welcome Home!!!</h3>
    </Box>
  );
}
