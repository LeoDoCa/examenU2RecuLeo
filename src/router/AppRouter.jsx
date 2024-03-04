/*Navegar entre componentes por medio de URL*/
import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import SignInPage from '../modules/auth/SignInPage';
import { useContext } from 'react';
import AuthContext from '../config/context/auth-context';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';

const AppRouter = () => {
    const { user, dispatch } = useContext(AuthContext);   //Context = payload => /api/auth
    //Toda mi aplicación sabe que datos de mi usuario tengo disponibles
    const logout = () => {
        dispatch({ type: "SIGNOUT" })
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {user.signed ? (
                    <>
                        <Route path='/' element={<AdminLayout />}>

                            {user.roles[0]?.name === "ADMIN_ROLE" && (
                                <Route
                                    path="admin"
                                    element={
                                        <>
                                            <div className='flex justify-center mt-6'>
                                                <h3 className='text-xl font-bold'>Bienvenido(a)</h3>
                                            </div>
                                            <div className='flex justify-center mt-2'>
                                                <h3 className='text-xl'>{user.user.person?.name} {user.user.person?.surname} {user.user.person?.lastname ?? ''}</h3>
                                            </div>
                                            <div className='flex justify-center mt-2'>
                                                <h3 className='text-xl italic'>Rol: {user?.roles[0]?.name}</h3>
                                            </div>
                                        </>
                                    }
                                />
                            )}

                            {user.roles[0]?.name === "CLIENT_ROLE" && (
                                <Route
                                    path="client"
                                    element={
                                        <>
                                            <div className='flex justify-center mt-6'>
                                                <h3 className='text-xl font-bold'>Bienvenido(a)</h3>
                                            </div>
                                            <div className='flex justify-center mt-2'>
                                                <h3 className='text-xl'>{user.user.person?.name} {user.user.person?.surname} {user.user.person?.lastname ?? ''}</h3>
                                            </div>
                                            <div className='flex justify-center mt-2'>
                                                <h3 className='text-xl italic'>Rol: {user?.roles[0]?.name}</h3>
                                            </div>
                                        </>
                                    }
                                />
                            )}

                            {user.roles[0]?.name === "USER_ROLE" && (
                                <Route
                                    path="user"
                                    element={
                                        <>
                                            <div className='flex justify-center mt-6'>
                                                <h3 className='text-xl font-bold'>Bienvenido(a)</h3>
                                            </div>
                                            <div className='flex justify-center mt-2'>
                                                <h3 className='text-xl'>{user.user.person?.name} {user.user.person?.surname} {user.user.person?.lastname ?? ''}</h3>
                                            </div>
                                            <div className='flex justify-center mt-2'>
                                                <h3 className='text-xl italic'>Rol: {user?.roles[0]?.name}</h3>
                                            </div>
                                        </>
                                    }
                                />
                            )}

                        </Route>
                    </>
                ) : (
                    <Route path="/" element={<SignInPage />} />
                )}
                <Route path='/*' element={<>404 not found</>} />
            </>
        )
    );
    return (
        < RouterProvider router={router} />
    );
}

export default AppRouter