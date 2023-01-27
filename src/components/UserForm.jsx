import { user, users } from "../store/user"
import { useStore } from '@nanostores/react';
import { nanoid } from 'nanoid';

const UserForm = () => {
    const $user = useStore(user)
    const $users = useStore(users)
    const createOrUpdateUser = (e) => {
        e.preventDefault()
        if ($user._id !== "") {
            users.set($users.map(u => {
                if (u._id === $user._id) {
                    return $user
                } else {
                    return u
                }
            }))
        } else {
            users.set([
                ...$users,
                {
                    ...$user,
                    _id: nanoid(8)
                }
            ])
        }
        console.log($users);
        user.set({
            _id: "",
            name: "",
            email: "",
            password: ""
        })
    }
    const setUser = (e) => {
        user.set({
            ...$user,
            [e.target.name]: e.target.value
        })
    }
    return <>
       <div className="flex justify-center">
       <h1 className="text-5xl my-12 text-white">User Form</h1>
       </div>
        <div className="flex justify-center">

            <form onSubmit={createOrUpdateUser} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Name
                        </label>
                        <input name="name" onChange={setUser} value={$user.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Email
                        </label>
                        <input name="email" onChange={setUser} value={$user.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Doe@gmail.com" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Password
                        </label>
                        <input name="password" onChange={setUser} value={$user.password} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Button
                </button>
            </form>
        </div></>
}

export default UserForm