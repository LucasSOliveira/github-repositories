export interface Route {
    id: string;
    path: string;
    Page: React.LazyExoticComponent<() => JSX.Element | null | undefined>;
}

export type Routes = Route[];
