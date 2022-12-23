import { FC, useEffect, useRef, useState } from "react";
import { AuthContextProvider, SocketContextProvider } from "../../context";
import useFetch from "../../hooks/useFetch";
import { Chat, propsModuleChat } from "../../interfaces";
import { queries } from "../../utils/Fetching";
import { LoadingItem } from "../Loading";
import { HeaderChat } from "./HeaderChat";
import { InputChat } from "./InputChat";
import { MessageItem } from "./MessageItem";


export const ModuleChat: FC<propsModuleChat> = ({ setConversation, data }) => {
  const [limitMsg, setLimitMsg] = useState(2);
  const [skipMsg, setSkipMsg] = useState(0);
  const initialQuery = {
    query: queries.getOneChat,
    variables: { IDChat: data?._id, skip: skipMsg, limit: limitMsg },
  }
  const [messages, setMessages, loading, error, fetch] = useFetch(initialQuery);
  const { socket } = SocketContextProvider();
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [count, setCount] = useState<number>(0);

  // Ref del div que continene los mensajes para hacer el scroll bottom
  const refBoxMsg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refBoxMsg && refBoxMsg.current) {
      const element = refBoxMsg.current;
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [refBoxMsg, messages, loading, show]);


  useEffect(() => {
    if (!show && count == messages?.messages?.length) {
      setTimeout(() => {
        setShow(true)
      }, 700);
    }
  }, [count]);



  // Socket para escuchar evento(ID Chat) para recibir mensajes
  const handleSocket = (data: any) => {
    setMessages((old: Chat) => ({
      ...old,
      messages: [...old?.messages, data],
    }));
  };

  useEffect(() => {
    // PARA RECIBIR MENSAJES
    socket?.on(`${data?._id}`, handleSocket);

    return () => {
      socket?.off(`${data?._id}`, handleSocket);
    };
  }, [socket, data?._id]);


  return (
    <>
      <div className="flex-col h-full absolute top-10 left-0 w-full z-10 bg-white sm:rounded-t-xl">
        <HeaderChat data={data} setConversation={setConversation} />
        {/* BODY */}
        <div ref={refBoxMsg} className={`canvasChat w-full h-[100%] flex flex-col px-5 ${show ? "overflow-auto" : "overflow-hidden"}`}>
          {!loading ? (
            <>
              <div className={`${!show && "invisible"}`}>
                {// @ts-ignore
                  messages?.messages?.map((element, idx: number) => (
                    <MessageItem
                      key={idx}
                      message={element}
                      setCount={setCount}
                    />
                  ))

                }
              </div>
            </>
          ) : (
            <span className="text-gray-400 w-full h-full flex items-center justify-center">
              <LoadingItem size="small" text="" />
            </span>
          )}
        </div>
        {/* INPUT */}
        <InputChat value={value} setValue={setValue} data={data} />
      </div>
      <style jsx>
        {`
        @media (max-width: 639px) {
          .canvasChat{
            height: calc(100% - 5rem - 40px)
          }
        }
        @media (min-width: 639px) {
          .canvasChat{
            height: calc(100% - 6rem - 40px)
          }
        }
        
      `}
      </style>
    </>
  );
};