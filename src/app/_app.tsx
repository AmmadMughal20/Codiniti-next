// pages/_app.tsx
import "@/index.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import FloatingWhatsAppButton from "@/components/WhatsappChat";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps)
{
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <TooltipProvider>
                        <Toaster />
                        <Sonner />
                        <FloatingWhatsAppButton />
                        <Component {...pageProps} />
                    </TooltipProvider>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    );
}
