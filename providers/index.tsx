'use client'

import { ThemeProvider } from "../context/theme-context";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/store/store';

export default function Providers({ children }: { children: React.ReactNode }) {
    const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
        cache: new InMemoryCache(),
    });

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ApolloProvider client={client}>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </ApolloProvider>
            </PersistGate>
        </Provider>
    );
}

