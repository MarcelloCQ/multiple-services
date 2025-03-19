interface Route {
  path: string;
  title: string;
  description: string;
}

export const convertRoutesToArray = (
  routes: Record<string, Omit<Route, 'path'>>
): Route[] => {
  return Object.entries(routes).map(([path, { title, description }]) => ({
    path,
    title,
    description,
  }));
};
