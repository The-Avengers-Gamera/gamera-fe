interface ConditionalWrapperProps {
  condition: boolean;
  renderWrapper: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}

const ConditionalWrapper = ({ condition, renderWrapper, children }: ConditionalWrapperProps) =>
  condition ? renderWrapper(children) : children;

export default ConditionalWrapper;
