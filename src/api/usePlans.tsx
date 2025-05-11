import { useQuery } from '@tanstack/react-query'

export interface IDataPlans {
  age: number;
  description: Array<string>;
  name: string;
  price: number
}

interface IResponseUsePlans {
  data: {
    list: IDataPlans[]
  };
  isFetching: boolean;
  error: {
    message: string
  } | null
}

export const usePlans = (): IResponseUsePlans => {
  const { error, data, isFetching } = useQuery({
    queryKey: ['getPlans'],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/plans.json`,
      )
      return await response.json()
    },
  })

  return {
    data,
    isFetching,
    error,
  };
}
