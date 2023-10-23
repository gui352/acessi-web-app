export const withHOCs =
  (...hocs: React.HOC[]): React.HOC =>
  (Component) => {
    let wrapped = Component;

    for (const hoc of hocs) {
      wrapped = hoc(wrapped);
    }

    return wrapped;
  };
