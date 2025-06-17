import { computed, inject, MaybeRef, provide, ref, Ref, unref } from 'vue';
import { ColorVariant } from '../config/colorVariant';

export function useVariant(variantStyle?: MaybeRef<ColorVariant | undefined>, adapted: boolean = false) {
  const injectedVariant = inject<Ref<ColorVariant | undefined>>('variant', ref(undefined)); // Provide a default

  const baseVariant = computed(() => unref(variantStyle) || injectedVariant.value);
  const adaptedVariant = computed(() => {
    // Only apply mapping if there's a baseVariant value
    return baseVariant.value && adapted ? defautCardVariants(baseVariant.value) : baseVariant.value;
  });
  // The final variant to use (either directly provided or adapted from parent)
  const variant = computed(() => unref(variantStyle) || adaptedVariant.value || ColorVariant.WHITE);
  const isDarkVariant = computed(() => {
    return variant.value === ColorVariant.DARKGREEN || variant.value === ColorVariant.EVERGREEN;
  });
  provide('variant', variant);
  const headingColor = computed(() => getHeadingColor(variant.value));
  const backgroundColor = computed(() => getContainerBackgroundColor(variant.value));
  const cardBackgroundColor = computed(() => getCardBackgroundColor(variant.value));
  const textColor = computed(() => getParagraphColor(variant.value));
  const proseVariant = computed(() => getProseVariant(variant.value));
  const iconColor = computed(() => getIconColor(variant.value));
  const subCardColor = computed(() => {
    switch (variant.value) {
      case ColorVariant.EVERGREEN:
        return { background: 'bg-darkgreen', text: 'text-white' };
      case ColorVariant.DARKGREEN:
        return { background: 'bg-evergreen', text: 'text-white' };
      case ColorVariant.TRANSPARENT:
        return { background: 'bg-fog dark:bg-evergreen', text: 'text-black dark:text-white' };
      case ColorVariant.WHITE:
        return { background: 'bg-fog dark:bg-darkgreen', text: 'text-black dark:text-white' };
      case ColorVariant.FOG:
        return { background: 'bg-white dark:bg-darkgreen', text: 'text-black dark:text-white' };
      case ColorVariant.SUN:
        return { background: 'bg-warm', text: 'text-black' };
      default:
        return { background: 'bg-fog dark:bg-evergreen', text: 'text-black dark:text-white' };
    }
  });
  const inputColor = computed(() => {
    if (isDarkVariant.value) {
      return { inputText: '!text-white', help: '!text-gray-300' };
    } else {
      return {
        inputText: '!text-black dark:!text-white',
        help: '!text-gray-400',
      };
    }
  });

  return {
    headingColor,
    backgroundColor,
    textColor,
    cardBackgroundColor,
    iconColor,
    proseVariant,
    variant,
    isDarkVariant,
    subCardColor,
    inputColor,
  };
}
const getHeadingColor = (variant: ColorVariant) => {
  switch (variant) {
    case ColorVariant.TRANSPARENT:
      return 'text-black dark:text-sun ';
    case ColorVariant.GREEN:
      return 'text-white dark:text-sun';
    case ColorVariant.EVERGREEN:
      return 'text-sun ';
    case ColorVariant.DARKGREEN:
      return 'text-sun';
    case ColorVariant.FOG:
      return 'text-black dark:text-sun ';
    case ColorVariant.WARM:
      return 'text-black dark:text-sun ';
    default:
      return 'text-black dark:text-sun ';
  }
};

const getParagraphColor = (variant: ColorVariant) => {
  switch (variant) {
    case ColorVariant.TRANSPARENT:
      return 'text-black dark:text-white ';
    case ColorVariant.GREEN:
      return 'text-white';
    case ColorVariant.EVERGREEN:
      return 'text-white ';
    case ColorVariant.DARKGREEN:
      return 'text-white';
    case ColorVariant.FOG:
      return 'text-black dark:text-white ';
    case ColorVariant.WARM:
      return 'text-black dark:text-white';
    case ColorVariant.WHITE:
      return 'text-black dark:text-white';
    default:
      return 'text-black dark:text-white ';
  }
};

const getCardBackgroundColor = (variant: ColorVariant) => {
  switch (variant) {
    case ColorVariant.TRANSPARENT:
      return 'bg-transparent dark:bg-evergreen ';
    case ColorVariant.GREEN:
      return 'bg-green dark:bg-darkgreen';
    case ColorVariant.LIGHTGREEN:
      return 'bg-lightgreen dark:bg-darkgreen';
    case ColorVariant.EVERGREEN:
      return 'bg-darkgreen text-white ';
    case ColorVariant.DARKGREEN:
      return 'bg-evergreen text-white';
    case ColorVariant.FOG:
      return 'bg-fog dark:bg-darkgreen ';
    case ColorVariant.WARM:
      return 'bg-warm dark:bg-darkgreen ';
    case ColorVariant.SUN:
      return 'bg-sun dark:bg-darkgreen';
    case ColorVariant.WHITE:
      return 'bg-white dark:bg-darkgreen';
    default:
      return 'bg-transparent dark:bg-darkgreen ';
  }
};

const getContainerBackgroundColor = (variant: ColorVariant) => {
  switch (variant) {
    case ColorVariant.TRANSPARENT:
      return 'bg-transparent dark:bg-darkgreen';
    case ColorVariant.GREEN:
      return 'bg-green text-white dark:bg-evergreen';
    case ColorVariant.LIGHTGREEN:
      return 'bg-lightgreen dark:bg-evergreen';
    case ColorVariant.EVERGREEN:
      return 'bg-evergreen-400 text-white';
    case ColorVariant.DARKGREEN:
      return 'bg-darkgreen text-white';
    case ColorVariant.FOG:
      return 'bg-fog-400 dark:bg-evergreen ';
    case ColorVariant.WARM:
      return 'bg-warm-400 dark:bg-evergreen ';
    case ColorVariant.SUN:
      return 'bg-sun-400 dark:bg-evergreen';
    case ColorVariant.WHITE:
      return 'bg-white dark:bg-evergreen';
    default:
      return 'bg-transparent dark:bg-darkgreen';
  }
};

//Default card variant colors against parent variant
const defautCardVariants = (color: ColorVariant) => {
  switch (color) {
    case ColorVariant.TRANSPARENT:
      return ColorVariant.TRANSPARENT;
    case ColorVariant.EVERGREEN:
      return ColorVariant.EVERGREEN;
    case ColorVariant.GREEN:
      return ColorVariant.WHITE;
    case ColorVariant.LIGHTGREEN:
      return ColorVariant.WHITE;
    case ColorVariant.WHITE:
      return ColorVariant.WHITE;
    case ColorVariant.FOG:
      return ColorVariant.WHITE;
    case ColorVariant.WARM:
      return ColorVariant.WHITE;
    case ColorVariant.SUN:
      return ColorVariant.EVERGREEN;
    case ColorVariant.DARKGREEN:
      return ColorVariant.DARKGREEN;
    default:
      return ColorVariant.TRANSPARENT;
  }
};

const getIconColor = (variant: ColorVariant) => {
  switch (variant) {
    case ColorVariant.FOG:
      return { background: 'bg-typegreen dark:bg-darkgreen', icon: 'text-lightgreen' };
    default:
      return { background: 'bg-typegreen', icon: 'text-lightgreen' };
  }
};
const getProseVariant = (variant: ColorVariant) => {
  switch (variant) {
    case ColorVariant.DARKGREEN:
    case ColorVariant.EVERGREEN:
    case ColorVariant.GREEN:
      return 'prose prose-invert';
    default:
      return 'prose dark:prose-invert';
  }
};
