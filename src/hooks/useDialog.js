import { useState } from "react";

const useDialog = () => {
  const [openDialogParentIds, setOpenDialogParentIds] = useState([]);
  const openDialog = (parentId) => {
    if (!parentId || openDialogParentIds.includes(parentId)) return;
    setOpenDialogParentIds([...openDialogParentIds, parentId]);
  };

  const closeDialog = (parentId) => {
    const parentIds = openDialogParentIds.filter((id) => id !== parentId);
    setOpenDialogParentIds(parentIds);
  };

  const checkIsDialogOpen = (parentId) =>
    openDialogParentIds.some((id) => id === parentId);

  return { openDialogParentIds, openDialog, closeDialog, checkIsDialogOpen };
};

export default useDialog;
