import { createFileRoute } from "@tanstack/react-router";
import { InventoryApp } from "@/components/inventory-app";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return <InventoryApp />;
}
