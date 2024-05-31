import { Provider as ReduxProvider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import store from "@/store";
import client from "@/services/api/client.apollo";

interface childrenProp {
    children: ReactNode;
}


interface Provider {
    id: string;
    Provider: ({ children }: childrenProp) => JSX.Element | null | undefined;
}

const providers: Provider[] = [
    {
        id: "redux",
        Provider: ({ children }) => <ReduxProvider store={store}>{children}</ReduxProvider>,
    },
    {
        id: "apollo",
        Provider: ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>,
    },
];


const root = ({ children }: childrenProp) => {
    return providers.reduce((acc, { Provider }) => <Provider>{acc}</Provider>, children);
}

export default root;
