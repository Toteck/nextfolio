
import { PreviewExperiencias } from "./PreviewExperiencias";
import { PreviewHabilidades } from "./PreviewHabilidades";
import { PreviewHeader } from "./PreviewHeader";

// Preview Geral do curriculo
export function Preview() {
    return (
        <div>
            <PreviewHeader />
            <PreviewHabilidades />
            <PreviewExperiencias />
        </div>
    )
}