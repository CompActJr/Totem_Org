import type { Organization } from "~/types/organizations.types";

const CACHE_TTL = 15 * 60 * 1000;

export function useOrganizations() {
  const organizations = useState<Organization[]>("organizations", () => [],);

  const fetchedAt = useState<number>("organizations:fetchedAt", () => 0,);

  const pending = useState<boolean>("organizations:pending", () => false,);

  const error = useState<string | null>("organizations:error", () => null,);

  const config = useRuntimeConfig();

  // função assincrona para carregar as unidades considerando o cache
  async function loadOrganizations(force = false) {
    const cacheIsValid = fetchedAt.value > 0 && Date.now() - fetchedAt.value < CACHE_TTL;

    if (!force && cacheIsValid) {
      return organizations.value;
    }

    if (pending.value) {
      return organizations.value;
    }

    pending.value = true;
    error.value = null;

    try {
      const data = await $fetch<Organization[]>(`${config.public.apiBase}/api/organizations`);

      organizations.value = data;
      fetchedAt.value = Date.now();

      return data;
    } catch (err) {
      error.value = "Não foi possível carregar as unidades.";
      throw err;
    } finally {
      pending.value = false;
    }
  }

  function getBySlug(slug: string) {
    return organizations.value.find((organization) => organization.slug === slug);
  }

  function getById(id: number) {
    return organizations.value.find((organization) => organization._id === id);
  }

  function getByType(type: Organization["@type"]) {
    return organizations.value.filter((organization) => organization["@type"] === type);
  }

  return {
    organizations,
    pending,
    error,
    loadOrganizations,
    getBySlug,
    getById,
    getByType,
  };
}
