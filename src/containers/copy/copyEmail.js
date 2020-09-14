import React, { useRef, useState } from "react";

function CopyEmail() {
    const [copySuccess, setCopySuccess] = useState("");
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand("copy");
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        setCopySuccess("Copied!");
    }

    return (
        <div>
            {
                /* Logical shortcut for only displaying the 
          button if the copy command exists */
                document.queryCommandSupported("copy") && (
                    <div>
                        <button onClick={copyToClipboard}>Copy</button>
                        {copySuccess}
                    </div>
                )
            }
            <form>
                <textarea ref={textAreaRef} value="tomas.milkintas1@gmail.com" />
            </form>
        </div>
    );
}

export default CopyEmail;
