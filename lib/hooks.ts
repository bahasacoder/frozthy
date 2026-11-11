// hooks.ts atau tambahkan di bawah kode store Anda
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store' // Sesuaikan path jika beda file

// Gunakan hooks ini di seluruh aplikasi Anda, jangan gunakan useDispatch/useSelector bawaan langsung
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
