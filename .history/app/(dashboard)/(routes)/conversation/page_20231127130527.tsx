"use client";
import axios from "axios";
import * as z from "zod";
import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form,FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";

const Conversation = () => {
    const router = useRouter();
    const [messages,setMessages]= useState<ChatCompletionRequestMessage[]>([]);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            prompt:""
        }
    });
    if (!form) {
        // If form is not available yet, you can handle it here
        return null;
      }

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
          const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
          const newMessages = [...messages, userMessage];
          
          const response = await axios.post('/api/conversation', { messages: newMessages });
          setMessages((current) => [...current, userMessage, response.data]);
          console.log('sssss',response)
        //   form.reset();
        } catch (error: any) {
          if (error?.response?.status === 403) {
            // proModal.onOpen();
          } else {
            // toast.error("Something went wrong.");
          }
        } finally {
          router.refresh();
        }
      }
    return ( 
        <div>
          <Heading title={"Conversation"} 
          description={"Our most advanced conversation"} 
          icon={MessageSquare}
          iconColor="text-violet-500"
          bgColor="bg-violet-500/10"/>
          <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}
                        className="rounded-lg 
                        border w-full p-4 px-3 md:px-6 focus-within:shadow-sm
                        grid
                        grid-cols-12
                        gap-2">
                            <FormField name="prompt" render={({field})=>(
                                <FormItem className="col-span-12 lg:col-span-10">
                                    <FormControl className="m-0 p-0">
                                       <Input className="border-0 outline-none focus-visible:ring-0 
                                       focus-visible:ring-transparent" disabled={isLoading} placeholder="How do I calaculate the radius of circle" {...field}/>
                                    </FormControl>

                                </FormItem>
                            )}
                            />
                            <Button className="col-span-12 lg:col-span-12">Generate</Button>
                        </form>
                            
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                      <div className="flex flex-col-reverse">
                                {messages.map((message)=>(
                                    <div key={message.content}>{message.content}
                                        </div>
                                ))}
                      </div>
                </div>
          </div>
        </div>
     );
}
 
export default Conversation;