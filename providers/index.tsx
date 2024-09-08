'use client'

import { ThemeProvider } from "../context/theme-context";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

export default function Providers({ children }: { children: React.ReactNode }) {
    const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ApolloProvider>
    );
}