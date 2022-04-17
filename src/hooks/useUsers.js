import { useMemo } from "react"

export const UseSortedUsers= (users, sort) => {
    const sortedUsers = useMemo(() =>{
        if(sort){
            switch(sort){
                case "address" :
                    return [...users].sort((a,b)=> a[sort].city.localeCompare(b[sort].city));
                case "company" :
                    return [...users].sort((a,b)=> a[sort].name.localeCompare(b[sort].name));
            }
        }
        return users;
    },
    [sort, users]);
    return sortedUsers;
    };
