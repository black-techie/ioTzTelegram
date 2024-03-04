import { axiosInstance } from "./abs"








const sendMessage = (messageObj: any, messageText: any) => {
    return axiosInstance.get("sendMessage", {
        params: {
            "chat_id": messageObj.chat.id,
            "text": messageText
        }
    })
}