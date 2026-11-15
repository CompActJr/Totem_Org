import type { Organization } from '~/types/organizations.types';

export function useUnidadeRoutes(unidade: MaybeRefOrGetter<Organization>) {
  const base = computed(() => {
    const u = toValue(unidade);
    return u.slug
      ? `/${u['@type']}/unidade/${u.slug}`
      : `/${u['@type']}`;
  });

  const details = computed(() => base.value);

  // tour só existe para colégios e só se tiver slug
  const tour = computed(() => {
    const u = toValue(unidade);
    return u['@type'] === 'colegios' && u.slug
      ? `${base.value}/tour`
      : null;
  });

  return { details, tour };
}