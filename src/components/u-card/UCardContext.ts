import { inject, InjectionKey, Ref } from "vue";

export interface StateDefinition {
  titleId: Ref<string | undefined>;
}

export const CardContext = Symbol("CardContext") as InjectionKey<StateDefinition>;

export function useCardContext(component: string) {
  let context = inject(CardContext, null);
  if (context === null) {
    let err = new Error(
      `<${component} /> is missing a parent <UCard /> component.`
    );
    throw err;
  }
  return context;
}
