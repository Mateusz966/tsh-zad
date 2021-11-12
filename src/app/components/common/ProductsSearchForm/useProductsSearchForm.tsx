import {useForm, UseFormReturn} from "react-hook-form";

interface UseProductsSearchForm {
  methods: UseFormReturn;
  search: string;
  active: boolean;
  promo: boolean;
}

export const useProductsSearchForm = (): UseProductsSearchForm => {
  const methods = useForm();
  const search = methods.watch('search');
  const active = methods.watch('active');
  const promo = methods.watch('promo');


  return {
    methods,
    search,
    active,
    promo,
  };
}