import { useMemo } from "react"

export const UseSortedUsers= (users, sort) => {
    const sortedUsers = useMemo(() =>{
        if(sort){
            switch(sort){
                case "name" :
                    return [...users].sort((a,b)=> a[sort].localeCompare(b[sort]));
                case "company" :
                    return [...users].sort((a,b)=> a[sort].name.localeCompare(b[sort].name));
            }
    
        }
        return users;
    },
    [sort, users]);
    return sortedUsers;
    };
