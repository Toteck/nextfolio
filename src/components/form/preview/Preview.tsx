import React from "react";
import { PreviewHeader } from "./PreviewHeader";
import { PreviewResumo } from "./PreviewResumo";
import { PreviewExtraContacts } from "./PreviewExtraContacts";
import { PreviewEducacao } from "./PreviewEducacao";
import { PreviewExperiencias } from "./PreviewExperiencias";
import { PreviewHabilidades } from "./PreviewHabilidades";

export function Preview() {
  return (
    <div className="space-y-4">
      <PreviewHeader />
      <PreviewResumo />
      <PreviewExtraContacts />
      <PreviewEducacao />
      <PreviewExperiencias />
      <PreviewHabilidades />
    </div>
  );
}
