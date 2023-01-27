import { user, users } from "../store/user"
import { useStore } from '@nanostores/react';
const UserTable = () => {
    const $user = useStore(user)
    const $users = useStore(users)
    const setUser = (u) => {
        user.set(u)
    }
    const deleteUser = (id) => {
        users.set($users.map(u=>{
                if(u._id !== id) {
                    return u
                }
            })
        )
    }
    return <>
        <h1>User Table</h1>
        <table className="border-collapse table-auto w-full text-sm">
            <thead>
                <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Name</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Email</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Password</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Edit</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Delete</th>
                </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
                {
                    $users.map(u => {
                        return u && <tr key={u._id}>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{u.name}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{u.email}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{u.password}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                <button onClick={()=> setUser(u)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Edit
                                </button>
                            </td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                <button onClick={()=> deleteUser(u._id)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}

export default UserTable