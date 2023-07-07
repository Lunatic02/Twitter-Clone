import { useSession } from "next-auth/react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
}

export default function NewTweetForm() {
  const session = useSession();
  const [inputValue, setInputValue] = useState("");
  

  
  
  if(session.status !== "authenticated") return;
  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={session.data.user.image}/>
        <textarea
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none" 
          value={inputValue}
          onChange={e=> setInputValue(e.target.value)}
          placeholder="What's happening?" 
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  )
}