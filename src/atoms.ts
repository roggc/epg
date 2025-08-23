import { atom } from "jotai";
import getAPIFromAtoms from "jotai-wrapper";

export const { useAtom, useSetAtom, useAtomValue, getAtom, selectAtom } =
  getAPIFromAtoms({
    hourWidth: atom(200),
    // rest of atoms
  });
