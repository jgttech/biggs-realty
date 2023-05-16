import { type } from 'ramda';
import { asArr } from 'utils/asArr';

const getElements = (children: ReactNode[], types: string[]) => {
  const elements: ReactElement[] = [];

  children.forEach(child => {
    if (child && type(child) === 'Object') {
      const el = child as ReactElement<
        { children?: Children },
        FC<any> & { readonly $$typeof: symbol }
      >;
      const childType = el.type.displayName;
      const childIsFragment = el.type?.toString() === 'Symbol(react.fragment)';

      if (!childIsFragment) {
        if (childType && types.includes(childType)) {
          elements.push(el);
        }
      } else {
        const fragments = asArr<ReactNode>(el.props?.children || []);
        const fragmentChildren = getElements(fragments, types);

        fragmentChildren.forEach(subElement => {
          elements.push(subElement);
        });
      }
    }
  });

  return elements;
};

export const useComponents = (children: Children, components: FC<any>[]) => {
  const elements = asArr<ReactNode>(children);
  const types = components.map(({ displayName }) => displayName) as string[];

  return getElements(elements, types);
};
