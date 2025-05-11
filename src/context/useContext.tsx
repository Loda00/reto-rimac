import { createContext, useContext, useState, type FC, type ReactNode } from 'react';
import type { IDataUser } from 'api/useUser';
import type { For } from 'interfaces/pages/IQuote';

interface IPlan {
  plan: string;
  price: string;
}

interface IThemeContextType {
  _user: IDataUser;
  _for: For;
  _phone: string;
  _typeDocumet: string;
  _numberDocument: string;
  _plan: IPlan;
}

interface MyContextMutations {
  actFor: (data: For) => void,
  actNumberDocument: (num: string) => void,
  actPhone: (phone: string) => void,
  actTypeDocumet: (type: string) => void,
  actUser: (user: IDataUser) => void,
  actPlan: (plan: { plan: string, price: string}) => void,
}

interface MyContextValue extends IThemeContextType, MyContextMutations {}

export const ThemeContext = createContext<MyContextValue | undefined>(undefined);

export const MyContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [_for, setFor] = useState<For>('');
  const [_numberDocument, setNumberDocument] = useState<string>('');
  const [_phone, setPhone] = useState<string>('');
  const [_typeDocumet, setTypeDocumet] = useState<string>('');
  const [_user, setUser] = useState<IDataUser>({ birthDay: '', lastName: '', name: '' });
  const [_plan, setPlan] = useState<IPlan>({ plan: '', price: ''});

  const actFor = (data: For) => {
    setFor(data)
  }

  const actNumberDocument = (num: string) => {
    setNumberDocument(num)
  }

  const actPhone = (phone: string) => {
    setPhone(phone)
  }

  const actTypeDocumet = (type: string) => {
    setTypeDocumet(type)
  }

  const actUser = (user: IDataUser) => {
    setUser(user)
  }

  const actPlan = (plan: IPlan) => {
    setPlan(plan)
  }


  const initValueContext: MyContextValue = {
    _for,
    _numberDocument,
    _phone,
    _typeDocumet,
    _user,
    _plan,
    actFor,
    actNumberDocument,
    actPhone,
    actTypeDocumet,
    actUser,
    actPlan,
  }

  return (
    <ThemeContext.Provider value={initValueContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useMyContext debe ser usado dentro de un MyContextProvider');
  }
  return context;
};

