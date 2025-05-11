export interface IDataUser {
  name: string;
  lastName: string;
  birthDay: string;
}

export const useGetUser = async () : Promise<IDataUser> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/user.json`,
    )
    const json = await response.json()

    return json;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
    throw error;
  }

}