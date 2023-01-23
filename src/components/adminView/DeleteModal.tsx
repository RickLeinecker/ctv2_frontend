import { Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";

export const openDeleteModal = (name: string) =>
  openConfirmModal({
    title: "Delete User",
    centered: true,
    children: (
      <Text size="sm">
        Are you sure you want to delete{" "}
        <span style={{ fontWeight: 700 }}>{name}</span>? This action will{" "}
        <span style={{ fontWeight: 700 }}>permanently delete </span>
        this user from the database.
      </Text>
    ),
    labels: { confirm: "Delete user", cancel: "Nevermind" },
    confirmProps: { color: "red" },
    onCancel: () => console.log("Cancel"),
    onConfirm: () => console.log("Confirmed"),
  });
