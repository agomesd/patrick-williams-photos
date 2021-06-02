import { useContext } from 'react';
import { Context } from '../context/contextProvider';

const useHooks = () => useContext(Context);

export default useHooks;