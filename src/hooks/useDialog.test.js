import { renderHook, act } from "@testing-library/react";
import useDialog from "./useDialog";

describe("useDialog", () => {
  test("exposes the open dialog ids and checkIsDialogOpen, open/close dialog functions", () => {
    const { result } = renderHook(useDialog);
    expect(result.current.openDialogParentIds.length).toBe(0);

    const id = 1;

    act(() => result.current.openDialog(id));
    expect(result.current.openDialogParentIds.length).toBe(id);
    expect(result.current.checkIsDialogOpen(id)).toBe(true);

    act(() => result.current.closeDialog(id));
    expect(result.current.openDialogParentIds.length).toBe(0);
    expect(result.current.checkIsDialogOpen(id)).toBe(false);
  });
});
